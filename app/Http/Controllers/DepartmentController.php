<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $department = Department::orderBy('id','desc')->get();
            return response()->json($department);
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
            'name' => $request->get('name'),
            
        ];
        try {
            Department::create($newValues);

            return response()->json("department Created!!", 201);
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
    public function show(Department $department)
    {
        try {
            return response()->json($department);
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
                'name' => $request->get('name'),
            ];

            Department::where('id',$id)->update($updatedValues);

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
            Department::where('id',$id)->delete();

            return response()->json( "Deleted Succesfull", 200);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json( "Deleted Failure", 500);
        }
    }
}
