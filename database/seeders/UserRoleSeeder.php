<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::query()->find(4);
        $admin->roles()->sync([4]);

        $videographer = User::query()->find(3);
        $videographer->roles()->sync([3]);

        $staff = User::query()->find(2);
        $staff->roles()->sync([2]);

        $user = User::query()->find(1);
        $user->roles()->sync([1]);
    }
}
