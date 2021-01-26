<?php

use App\Http\Controllers\FootballPlayerController;
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


