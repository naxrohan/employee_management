<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\CityStoreRequest;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $city = City::orderBy('id','desc')->get();
            return response()->json($city);
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
    public function store(CityStoreRequest $request)
    {
        $newValues = [
            'state_id' => $request->get('state_id'),
            'name' => $request->get('name'),
        ];
        try {
            City::create($newValues);

            return response()->json("City Created!!", 201);
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
    public function show(City $city)
    {
        try {
            $states = State::all();
            return response()->json(['city' => $city, 'states' => $states]);
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
    public function update(CityStoreRequest $request, $id)
    {
        try {
            $updatedValues = [
                'state_id' => $request->get('state_id'),
                'name' => $request->get('name'),
            ];

            City::where('id',$id)->update($updatedValues);

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
            City::where('id',$id)->delete();

            return response()->json( "Deleted Succesfull", 200);
        } catch (Exception $e) {
            Log::error($e);
            return response()->json( "Deleted Failure", 500);
        }
    }
}
