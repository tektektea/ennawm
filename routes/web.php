<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\VideoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[HomeController::class,'index'])->name('home');

Route::get('/admin', function () {
    return Inertia::render('backend/DashboardPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('dashboard')->middleware('auth');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::resource('video', VideoController::class)->middleware('auth');
Route::get('free', [VideoController::class, 'free'])
    ->name('video.free');

Route::get('rents', [\App\Http\Controllers\RentController::class, 'rentedVideos'])
    ->middleware('auth')
    ->name('video.rented');

Route::get('rent/{video}', [\App\Http\Controllers\RentController::class, 'create'])
    ->name('rent.create')
    ->middleware('auth');
Route::post('rent/{video}', [\App\Http\Controllers\RentController::class, 'store'])
    ->name('rent.store')
    ->middleware('auth');

Route::post('payment/{video}', [PaymentController::class, 'createOrder'])
    ->name('payment.create')
    ->middleware('auth');
Route::post('rent/{video}/payment/{payment}',[PaymentController::class,'postPayment'])->name('callback.url');

Route::group(['prefix' => 'payment','middleware'=>'auth'], function () {
    Route::get('list', [PaymentController::class, 'list'])->name('payment.list');
});


require __DIR__.'/auth.php';
