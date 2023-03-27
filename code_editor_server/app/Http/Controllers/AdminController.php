<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    function listUsers(){
        $users = User::all();
        return json_encode($users);

    }
}
