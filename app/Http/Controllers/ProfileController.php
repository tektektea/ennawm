<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Validator;
use WpOrg\Requests\Auth;

class ProfileController extends Controller
{
    public function create(Request $request)
    {
        return inertia('pages/auth/ProfilePage', [
            'user' => $request->user(),
        ]);
    }
    public function getChangePassword(Request $request)
    {
        return inertia('pages/auth/ChangePasswordPage', [
            'user' => $request->user(),
        ]);
    }

    public function update(Request $request)
    {
        $validatedData=$this->validate($request, [
            'name'=>'required',
            'mobile'=>['required','digits:10',Rule::unique('users','mobile')->ignore(auth()->user())],
            'email'=>['required','email',Rule::unique('users','email')->ignore(auth()->user())]
        ]);
        $request->user()->update($validatedData);
        return Redirect::route('home');

    }
    public function changePassword(Request $request)
    {
        $validatedData=$this->validate($request, [
           'old_password'=>['required'],
            'password'=>['required','confirmed',Password::min(6)]
        ]);
        $user = $request->user();
        $match=Hash::check($request->get('old_password'), $user->password);

        if (!$match) {
            return back()->withErrors(['old_password' => 'Incorrect old password']);
        }
        \auth()->logout();
        \session()->regenerate();
        return Redirect::route('home');

    }
}
