<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    function listUsers(){
        $users = User::all("id","username","first_name","last_name","is_deleted");
        return response()->json([
            "status"=> "successful",
            'users'=>$users
        ]);
    }
    function deleteUser(Request $request){
        $id = $request -> id;
        $user = User::find($id);
        $user->is_deleted = 1;
        return json_encode($user);
    }
}
