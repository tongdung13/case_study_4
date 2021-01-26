<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ScheduleController extends Controller
{

    public function index()
    {

      $schedule = DB::table('schedules')->get();
      return response()->json($schedule);
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $schedule = new Schedule();
        $schedule->fill($request->all());
        $schedule->save();
        return response()->json($schedule);
    }


    public function show(Schedule $schedule,$id)
    {
        $schedule = Schedule::find($id);
        return response()->json($schedule);
    }


    public function edit(Schedule $schedule)
    {
        //
    }


    public function update(Request $request, Schedule $schedule,$id)
    {
        $schedule = Schedule::find($id);
        $schedule->fill($request->all());
        $schedule->save();
        return response()->json($schedule);
    }


    public function destroy(Schedule $schedule,$id)
    {
        $schedule = Schedule::find($id);
        $schedule->delete();
    }
}
