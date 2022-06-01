<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Rent;
use App\Models\User;
use App\Models\Video;
use App\Utils\RentUtil;
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
        $user=$request->user();
        $rent=$user->rents()->where('video_id', $video->id)->latest()->first();
        if (!blank($rent) && !$rent->expired ) {
            return Redirect::route('video.show', ['video' => $video->id]);
        }
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

    public function rentedVideos(Request $request)
    {
        $user = $request->user();
        $ids = $user->rents()
            ->pluck('video_id')??[];
        $videos = Video::query()->findMany($ids);

        $data=$videos->map(function ($item) use ($user) {
            $rent=Rent::query()->where('user_id', $user->id)
                ->where('video_id', $item->id)->latest()->first();
            $expired = blank($rent) || $rent->rent_at->addSeconds($rent->ttl)->lessThan(now());
            return [
                ...$item->toArray(),
                'expired'=>$expired
            ];
        });
        return \inertia('front/video/MyVideoPage', ['videos' => $data]);



    }
}
