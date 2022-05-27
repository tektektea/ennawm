<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class VideoController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->get('name');
        $type = $request->get('type');
        $list = Video::query()
            ->when($search,fn($q)=>$q->where('name','LIKE',"$search%"))
            ->when($type,fn($q)=>$q->where('type',"$type%"))
            ->paginate();
        return Inertia::render('backend/video/ListPage', [
            'list' => $list
        ]);
    }

    public function edit(Request $request)
    {
        return inertia('backend/video/EditPage');
    }

    public function create(Request $request)
    {
        return inertia('backend/video/CreatePage');
    }

    public function store(Request $request)
    {
        $validatedData=$this->validate($request, [
            'uid'=>'required|unique:videos',
            'title'=>'required',
            'price'=>'required|numeric',
            'poster_url' => 'required|url',
            'trailer_url' => 'required|url',
            'description' => 'string',
        ]);
        Video::query()->create($validatedData);
        Session::flash('success', 'Video added successfully');
        return Redirect::to(route('video.index'));

    }
    public function update(Request $request,Video $video)
    {
        $validatedData=$this->validate($request, [
            'uid'=>['required',Rule::unique('videos','uid')->ignore($video->id)],
            'title'=>'required',
            'postal_url' => 'required|url',
            'trailer_url' => 'required|url',
            'description' => 'string',
        ]);
        $video->update($validatedData);
        Session::flash('success', 'Video updated successfully');
        return Redirect::to('video.index');
    }

    public function destroy(Request $request, Video $video)
    {
        $video->delete();
        Session::flash('success', 'Video updated successfully');
        return Redirect::to(route('video.index'));
    }

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
