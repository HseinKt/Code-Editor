<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    public function login(Request $request){

        $functions_controller = new FunctionsController();
        $username = $functions_controller -> entryValidate($request ->username);
        $password = $functions_controller -> entryValidate($request ->password);
        
        $verified_username = User::where('username', $username)->count();
        if($verified_username){
            $user = User::where('username', $username)->first();

            $salt = $user->salt;
            $hashed_password = $user->password;
            $salt_password = $password.$salt;
            $hashed_salt_password = hash('sha256',$salt_password);

            if($hashed_password == $hashed_salt_password){
                $id = $user->id;
                $jwt_token = JWTAuth::fromUser($user);

                return response() -> json([
                    "user" => $user,
                    "token" => $jwt_token
                ]);
            }return response()->json(["error"=> "Wrong Username or Password"]);
        }return response()->json(["error"=> "Wrong Username or Password"]);
    }
}
