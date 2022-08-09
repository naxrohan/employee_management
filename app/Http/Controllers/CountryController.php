<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CountryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $country = Country::orderBy('id','desc')->get();
            return response()->json($country);
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
            'country_code' => $request->get('country_code'),
            'name' => $request->get('name'),
        ];
        try {
            Country::create($newValues);

            return response()->json("Country Created!!", 201);
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
    public function show(Country $country)
    {
        try {
            return response()->json($country);
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
                'country_code' => $request->get('country_code'),
                'name' => $request->get('name'),
            ];

            Country::where('id',$id)->update($updatedValues);

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
            Country::where('id',$id)->delete();

            return response()->json( "Deleted Succesfull", 200);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json( "Deleted Failure", 500);
        }
    }
}
