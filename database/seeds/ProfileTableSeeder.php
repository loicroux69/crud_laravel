<?php

use Illuminate\Database\Seeder;

class ProfileTableSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sql = file_get_contents(database_path() . '/seeds/test_dev_web.sql');
        
        DB::statement($sql);
    }
}
