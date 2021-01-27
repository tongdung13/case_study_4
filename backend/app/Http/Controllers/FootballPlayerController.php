<?php

namespace App\Http\Controllers;

use App\Models\FootballPlayer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FootballPlayerController extends Controller
{
    public function index()
    {
        $footballs = FootballPlayer::all();

        return response()->json($footballs);
    }

    public function store(Request $request)
    {
        $football = new FootballPlayer();
        $football->fill($request->all());

        if($request->hasFile('image')) {

            $image = $request->file('image');
            $path  = $image->store('images', 'public');
            $football->image = $path;
        }

        $football->save();
        return response()->json($football);
    }

    public function update(Request $request, $id)
    {
        $football = FootballPlayer::findOrFail($id);
        $football->fill($request->all());

        if($request->hasFile('image')){
            $cusrrenImg = $request->file('image');
            if($cusrrenImg){
                Storage::delete('/public/' . $cusrrenImg);
            }

            $image = $request->file('image');
            $path  = $image->store('images', 'public');
            $football->image = $path;
        }

        $football->save();
        return response()->json($football);
    }

    public function show($id)
    {
        $football = FootballPlayer::findOrFail($id);

        return response()->json($football);
    }


    public function destroy($id)
    {
        $football = FootballPlayer::findOrFail($id);
        $football->delete();

        return response()->json($football);
    }

    public function search(Request $request)
    {
        $football = FootballPlayer::where('name', 'like', '%' .$request->name . '%')->get();
        return response()->json($football, 200);
    }
}
