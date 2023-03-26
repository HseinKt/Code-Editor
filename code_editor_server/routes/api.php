<?php

use App\Http\Controllers\CodeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(["prefix" => "v1"], function() {

    Route::post('/register', [RegisterController::class, "register"]);
    Route::post('/login', [LoginController::class, "login"]);

    Route::group(['middleware' => 'auth:api'], function() {
        Route::get('/get_all_users', [UserController::class, "getAllUsers"]);
        Route::post('/send_message', [UserController::class, "sendMessage"]);
        Route::post('/get_message', [UserController::class, "getMessages"]);    
    });

});