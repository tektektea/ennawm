<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return vite()->getHash();
    }

    /**
     * Define the props that are shared by default.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'versions' => [
                'php' => PHP_VERSION,
                'laravel' => \Illuminate\Foundation\Application::VERSION
            ],
            'user' => $request->user(),
            'success' => Session::get('success'),
            'error' => Session::get('error'),
            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },
        ]);
    }
}
