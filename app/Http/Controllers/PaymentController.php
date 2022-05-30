<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Rent;
use App\Models\User;
use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Razorpay\Api\Api;

class PaymentController extends Controller
{
    protected $key;
    protected $secret;
    public function __construct()
    {
        $this->key = env('PAYMENT_KEY');
        $this->secret = env('PAYMENT_SECRET');
    }

    public function createOrder(Request $request,Video $video)
    {
        $user = $request->user();

        $order_id = time();
        $description = 'An Amount to rent ' . $video->title . "by $user->name";
        $api = new Api($this->key, $this->secret);
        $response=$api->order->create(array('receipt' => $order_id, 'amount' => (int)$video->price * 100, 'currency' => 'INR',
            'notes'=> array('key1'=> 'value3','key2'=> 'value2')));

        $payment=$user->payments()->create([
            'order_id' => $response['id'],
            'user_id'=>$user->id,
            'amount' => $response['amount'],
            'remark' => $description,
            'status'=>'created'
        ]);
        $callbackUrl = route('callback.url',['payment'=>$payment->id,'video'=>$video->id]);

        return inertia('front/video/VideoRent',[
            'video' => $video,
            'order_id' => $response['id'],
            'amount'=>$response['amount'],
            'callback_url'=>$callbackUrl,
            'user' => $user,
            'description' => $description,
            'key' => $this->key,
        ]);
    }

    public function postPayment(Request $request,Video $video,Payment $payment)
    {
        $payment_id= $request->get('razorpay_payment_id');
        $order_id=$request->get('razorpay_order_id');
        $signature=$request->get('razorpay_signature');

        $generated_signature = hash_hmac('sha256',$order_id . "|" . $payment_id, $this->secret);

        if ($generated_signature == $signature) {
            $payment->status = 'success';
            $payment->save();
            $key = env('VDO_API_KEY');
            $response=Http::withHeaders([
                'Authorization'=>"Apisecret $key",
                'Content-Type'=>'application/json'
            ])->post("https://dev.vdocipher.com/api/videos/$video->uid/otp",[
                'ttl'=>1800
            ]);
            if ($response->failed()) {
                return Inertia::render('error/ErrorPage.vue', [
                    'data' => $request->all(),
                ]);
            }

            $result = json_decode($response->body(),true);
            $user=User::query()->find($payment->user_id);
            Rent::query()->create([
                'user_id'=>$user->id,
                'video_id'=>$video->id,
                'remark'=>'rest',
                'otp' => $result['otp'],
                'playback_info' => $result['playbackInfo'],
                'ttl' => '1800',
                'rent_at' => now(),
            ]);

            return Redirect::route('video.show', ['video' => $video->id]);
        }
        return Inertia::render('font/payment/ErrorPage.vue', [
            'data' => $request->all(),
        ]);


    }
}
