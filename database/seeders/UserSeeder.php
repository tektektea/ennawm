<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
   function run()
    {
        $USERS = [
            ['id' => 4, 'name' => 'admin', 'mobile' => '9878787771', 'email' => 'admin@email.com', 'password' => Hash::make('password')],
            ['id' => 3, 'name' => 'staff', 'mobile' => '9878787772', 'email' => 'staff@email.com', 'password' => Hash::make('password')],
            ['id' => 2, 'name' => 'videographer', 'mobile' => '9878787773', 'email' => 'video@email.com', 'password' => Hash::make('password')],
            ['id' => 1, 'name' => 'user', 'mobile' => '9878787774', 'email' => 'user@email.com', 'password' => Hash::make('password')],
        ];
        User::query()->upsert($USERS, 'id');
    }
}
