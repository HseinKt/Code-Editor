<?php

use App\Http\Controllers\AdminController;
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

Route::group(["prefix" => "v1"], function () {
    Route::post('/download_file', [CodeController::class, "downloadFile"]);

    Route::post('/register', [RegisterController::class, "register"]);
    Route::post('/login', [LoginController::class, "login"]);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('/get_all_users', [UserController::class, "getAllUsers"]);
        Route::post('/send_message', [UserController::class, "sendMessage"]);
        Route::get('/get_message/{target_id}', [UserController::class, "getMessages"]);
        Route::post('/search_by_name', [UserController::class, "searchByName"]);
        Route::post('/get_user_by_name', [UserController::class, "getUserByName"]);
        Route::get('/get_user_by_id', [UserController::class, "getUserByID"]);

        Route::post('/output', [CodeController::class, "getOutput"]);
        Route::post('/save_file', [CodeController::class, "saveCode"]);
        Route::get('/get_files_names', [CodeController::class, "getFilesNames"]);
        Route::post('/get_code_from_file_name', [CodeController::class, "getCodeFromFileName"]);
    });
    Route::group(['middleware' => 'admin.role', 'prefix' => 'admin'], function () {
        Route::get('/list_users', [AdminController::class, "listUsers"]);
        Route::post('/delete_user', [AdminController::class, "deleteUser"]);
    });
});
