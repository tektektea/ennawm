<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $features = Video::query()->get(['id','title', 'price', 'description', 'poster_url', 'trailer_url']);
        return Inertia::render('IndexPage', [
            'features' => $features,
            'videos' => $features,
        ]);
    }
}
