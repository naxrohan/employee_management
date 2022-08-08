<?php

namespace App\Http\Controllers;

use Log;
use Exception;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $employees = Employee::orderBy('id','desc')->get();
            return response()->json($employees);
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
    public function store(Request $request)
    {
        $newValues = [
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'middle_name' => $request->get('middle_name'),
            'address' => $request->get('address'),
            'zip_code' => $request->get('zip_code'),
            'birthdate' => $request->get('birthdate'),
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
            return response()->json($employee);
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
    public function update(Request $request, $id)
    {
        try {
            $updatedValues = [
                'first_name' => $request->get('first_name'),
                'last_name' => $request->get('last_name'),
                'middle_name' => $request->get('middle_name'),
                'address' => $request->get('address'),
                'zip_code' => $request->get('zip_code'),
                'birthdate' => $request->get('birthdate'),
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
