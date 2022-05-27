<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class VideoController extends Controller
{
    public function show(Request $request, Video $video)
    {
        //TODO::check rental
        if (true) {
            $key = env('VDO_API_KEY');
            $response=Http::withHeaders([
                'Authorization'=>"Apisecret $key",
                'Content-Type'=>'application/json'
            ])->post("https://dev.vdocipher.com/api/videos/$video->uid/otp",[
                'ttl'=>300
            ]);

            $result = json_decode($response->body(),true);

            return inertia('front/video/VideoPlay', [
                'otp' => $result['otp'],
                'playbackInfo'=>$result['playbackInfo']
                ]);
        }

        return inertia('front/video/VideoPlay', [
        ]);
    }
}
