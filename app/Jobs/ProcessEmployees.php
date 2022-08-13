<?php

namespace App\Jobs;

use App\Models\Employee;
use Illuminate\Bus\Batchable;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ProcessEmployees implements ShouldQueue
{
    use Batchable, Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    public $employeeData;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($employeeData)
    {
        $this->employeeData = $employeeData;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        foreach ($this->employeeData as $employeeRow){
            
            $employee = new Employee();
            
            $employee->last_name = $employeeRow["last_name"];
            $employee->first_name = $employeeRow["first_name"];
            $employee->middle_name = $employeeRow["middle_name"];
            $employee->address = $employeeRow["address"];
            $employee->department_id = $employeeRow["department_id"];
            $employee->country_id = $employeeRow["country_id"];
            $employee->state_id = $employeeRow["state_id"];
            $employee->city_id = $employeeRow["city_id"];
            $employee->zip_code = $employeeRow["zip_code"];
            $employee->birthdate = $employeeRow["birthdate"];
            $employee->date_hired = $employeeRow["date_hired"];

            $employee->save();

        }
    }
}
