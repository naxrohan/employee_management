<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\CitySeeder;
use Database\Seeders\StateSeeder;
use Database\Seeders\CountrySeeder;
use Database\Seeders\EmployeeSeeder;
use Database\Seeders\DepartmentSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        $this->call(DepartmentSeeder::class);
        $this->call(CountrySeeder::class);
        $this->call(StateSeeder::class);
        $this->call(CitySeeder::class);
        $this->call(EmployeeSeeder::class);
    }
}
