<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    function listUsers(){
        $users = User::all("id","username","first_name","last_name");
        return json_encode($users);
    }
}
