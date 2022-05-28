<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Video::query()->upsert([
            ['id'=>1,'price'=>10,'poster_url'=>'https://images.unsplash.com/photo-1550355291-bbee04a92027','trailer_url'=>'https://www.youtube.com/watch?v=jLx8BjUuDJc','uid'=>'604ce67e98c743a99fc6026e227d85cd','title'=>'aitikon','description'=>'dff']
        ],'id');
    }
}
