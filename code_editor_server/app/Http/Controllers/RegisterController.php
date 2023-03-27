<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Models\User;
use App\Http\Controllers\FunctionsController;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    function register(Request $request)
    {
        $functions_controller = new FunctionsController();

        $username = $functions_controller->entryValidate($request->username);
        $password = $functions_controller->entryValidate($request->password);

        $first_name = $functions_controller->entryValidate($request->first_name);
        $last_name = $functions_controller->entryValidate($request->last_name);
        $gender = $functions_controller->entryValidate($request->gender);

        $salt = $functions_controller->generateRandomString(4);
        $hashed_password = hash('sha256', $password . $salt);

        $date = now()->format('d-m-y');
        $gender = ucfirst(strtolower($gender));

        $verified_username = User::where('username', $username)->first();

        if (!$verified_username) {

            $user = new User;
            $user->username = $username;
            $user->password = $hashed_password;
            $user->salt = $salt;

            $user->first_name = $first_name;
            $user->last_name = $last_name;
            $user->gender = $gender;

            $image_encoded = $functions_controller->saveImage($request);
            $user->picture = $image_encoded;
            $user->created_at = $date;

            $user->save();

            return response()->json([
                "success" => true,
            ]);
        } else {
            return response()->json([
                "error" => "Username already exists!"
            ]);
        }
    }
}
