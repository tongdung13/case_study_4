<?php

namespace App\Http\Controllers;

use App\Models\Manages;
use Illuminate\Http\Request;

class ManagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $manages =  Manages::all();
        return response()->json($manages);
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
        $manage = new Manages();
        $manage->fill($request->all());
        $manage->save();
        return response()->json($manage);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Manages  $manages
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $manage = Manages::find($id);
        return response()->json($manage);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Manages  $manages
     * @return \Illuminate\Http\Response
     */
    public function edit(Manages $manages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Manages  $manages
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $manage = Manages::find($id);
        $manage->fill($request->all());
        $manage->save();
        return response()->json($manage);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Manages  $manages
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $manage = Manages::find($id);
        $manage->delete();
    }
}
