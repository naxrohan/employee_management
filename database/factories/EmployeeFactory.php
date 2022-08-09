<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $name = $this->faker->name();
        return [
            'last_name' => $name,
            'first_name' => $name,
            'middle_name' => $name,
           'address' => 'address',
           'department_id' => 1,
           'country_id' => 1,
           'state_id' => 1,
           'city_id' => 1,
            'zip_code' => $this->faker->numberBetween(400000, 500000),
           'birthdate' => now(),
           'date_hired' => now()
        ];
    }
}
