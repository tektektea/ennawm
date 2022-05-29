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
            ['id'=>1,'price'=>10,'poster_url'=>'https://images.unsplash.com/photo-1550355291-bbee04a92027','trailer_url'=>'https://www.youtube.com/shorts/hV1q979DEDc','uid'=>'604ce67e98c743a99fc6026e227d85cd','title'=>'Naute zai','description'=>'dff'],
            ['id'=>2,'price'=>10,'poster_url'=>'https://images.unsplash.com/photo-1566004100631-35d015d6a491','trailer_url'=>'https://www.youtube.com/shorts/M63wfc86Zic','uid'=>'6abfd2c4619849ce9059a26a3e48db44','title'=>'Naute bike khalh','description'=>'dff']
        ],'id');
    }
}
