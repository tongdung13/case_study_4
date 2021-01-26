<?php


use App\Http\Controllers\FootballPlayerController;
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

Route::group(['prefix' => 'football'], function () {
    Route::get('', [FootballPlayerController::class, 'index']);
    Route::post('', [FootballPlayerController::class, 'store']);
    Route::get('/show/{id}', [FootballPlayerController::class, 'show']);
    Route::put('/update/{id}', [FootballPlayerController::class, 'update']);
    Route::delete('/{id}', [FootballPlayerController::class, 'destroy']);
});

Route::prefix('manages')->group(function() {
    Route::get('/', [\App\Http\Controllers\ManagesController::class, 'index']);
    Route::post('/', [\App\Http\Controllers\ManagesController::class, 'store']);
    Route::put('/{id}', [\App\Http\Controllers\ManagesController::class, 'update']);
    Route::get('/{id}', [\App\Http\Controllers\ManagesController::class, 'show']);
    Route::delete('/{id}', [\App\Http\Controllers\ManagesController::class, 'destroy']);

});

Route::prefix('schedules')->group(function(){
    Route::get('',[ScheduleController::class ,'index']);
    Route::post('/',[ScheduleController::class , 'store']);
    Route::put('/{id}',[ScheduleController::class , 'update']);
    Route::get('/{id}',[ScheduleController::class ,'show']);
    Route::delete('/{id}',[ScheduleController::class ,'destroy']);

});
