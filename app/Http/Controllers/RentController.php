<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Rent;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Razorpay\Api\Api;
use Razorpay\Api\Order;

class RentController extends Controller
{
    public function create(Request $request,Video $video)
    {
        return Inertia::render('front/video/VideoRent',[
            'video'=>$video
        ]);
    }

    public function store(Request $request,Video $video)
    {

        $user = $request->user();
        $key = env('VDO_API_KEY');
        $response=Http::withHeaders([
            'Authorization'=>"Apisecret $key",
            'Content-Type'=>'application/json'
        ])->post("https://dev.vdocipher.com/api/videos/$video->uid/otp",[
            'ttl'=>600
        ]);

        abort_if($response->failed(),'Something went wrong');
        $result = json_decode($response->body(),true);

        $rental = $user->rents()->where('video_id', $video?->id)->first();

        if (blank($rental)) {
            Rent::query()->create([
                'user_id'=>$user->id,
                'video_id'=>$video->id,
                'remark'=>'rest',
                'otp' => $result['otp'],
                'playback_info' => $result['playbackInfo'],
                'rent_at' => now(),
                'ttl' => '600',
            ]);
        }else{
            $expire = now()->greaterThan($rental->rent_at->addSeconds($rental->ttl));
            if ($expire) {
                $rental->update([
                    'user_id' => $user->id,
                    'video_id' => $video->id,
                    'remark' => 'rest',
                    'otp' => $result['otp'],
                    'playback_info' => $result['playbackInfo'],
                    'ttl' => '600',
                    'rent_at' => now(),
                ]);
            }
        }

        Session::flash('success', 'You have rented the video successfully');
        return Redirect::route('video.show', ['video'=>$video->id]);
    }
}
