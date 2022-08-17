<?php

namespace App\Http\Controllers;

use Log;
use Exception;
use App\Models\City;
use App\Models\State;
use App\Models\Country;
use App\Models\Employee;
use App\Models\Department;
use Illuminate\Http\Request;
use App\Http\Requests\EmployeeStoreRequest;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $current_page = 0;
        $page_size = 10;
        if(is_numeric($request->get('page'))){
            $current_page = $request->get('page');
        }
        if(is_numeric($request->get('size'))){
            $page_size = $request->get('size');
        }

        try {
            $employees = Employee::orderBy('id','asc')
                    ->offset($page_size*$current_page)
                    ->limit($page_size)
                    ->get();
            $total_items = Employee::all()->count();
            
            return response()->json([
                'items' => $employees,
                'total_items' => $total_items,
                'current_page' => $current_page
            ]);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json( "Fetch Failure", 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeStoreRequest $request)
    {
        $newValues = [
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'middle_name' => $request->get('middle_name'),
            'address' => $request->get('address'),
            'zip_code' => $request->get('zip_code'),
            'birthdate' => $request->get('birthdate'),
            'department_id' => $request->get('department_id'),
            'country_id' => $request->get('country_id'),
            'state_id' => $request->get('state_id'),
            'city_id' => $request->get('city_id'),
        ];
        try {
            Employee::create($newValues);

            return response()->json("Employee Created!!", 201);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json( "Create Failure", 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        try {
            return response()->json([
                'employee' => $employee,
                'departments' => Department::all(),
                'countries' => Country::all(),
                'states' => State::all(),
                'cities' => City::all()
            ]);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json( "Fetch Failure", 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeStoreRequest $request, $id)
    {
        try {
            $updatedValues = [
                'first_name' => $request->get('first_name'),
                'last_name' => $request->get('last_name'),
                'middle_name' => $request->get('middle_name'),
                'address' => $request->get('address'),
                'zip_code' => $request->get('zip_code'),
                'birthdate' => $request->get('birthdate'),
                'department_id' => $request->get('department_id'),
                'country_id' => $request->get('country_id'),
                'state_id' => $request->get('state_id'),
                'city_id' => $request->get('city_id'),
            ];

            Employee::where('id',$id)->update($updatedValues);

            return response()->json($updatedValues, 201);

        } catch (Exception $e) {
            Log::error($e);
            return response()->json( "Update Failure", 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            Employee::where('id',$id)->delete();

            return response()->json( "Deleted Succesfull", 200);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json( "Deleted Failure", 500);
        }
    }
}
