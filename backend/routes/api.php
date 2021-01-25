<?php

use App\Http\Controllers\ScheduleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('schedules')->group(function(){
    Route::get('',[ScheduleController::class ,'index']);
    Route::post('/',[ScheduleController::class , 'store']);
    Route::put('/{id}',[ScheduleController::class , 'update']);
    Route::get('/{id}',[ScheduleController::class ,'show']);
    Route::delete('/{id}',[ScheduleController::class ,'destroy']);
});
