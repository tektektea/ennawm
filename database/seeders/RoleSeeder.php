<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{

    const ROLES = [
        ['id' => 1, 'name' => 'user', 'remark' => ''],
        ['id' => 2, 'name' => 'staff', 'remark' => ''],
        ['id' => 3, 'name' => 'videographer', 'remark' => ''],
        ['id' => 4, 'name' => 'admin', 'remark' => ''],
    ];

    public function run()
    {
        Role::query()->upsert(self::ROLES,'id');
    }
}
