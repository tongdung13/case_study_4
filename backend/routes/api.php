<?php

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
Route::prefix('manages')->group(function(){
    Route::get('/',[\App\Http\Controllers\ManagesController::class,'index']);
    Route::post('/',[\App\Http\Controllers\ManagesController::class,'store']);
    Route::put('/{id}',[\App\Http\Controllers\ManagesController::class,'update']);
    Route::get('/{id}',[\App\Http\Controllers\ManagesController::class,'show']);
    Route::delete('/{id}',[\App\Http\Controllers\ManagesController::class,'destroy']);
});
