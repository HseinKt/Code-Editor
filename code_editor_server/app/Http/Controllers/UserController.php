<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getAllUsers']]);
    }

    public function getAllUsers () 
    {
        $users = User::all();

        return response()->json([
            'status' => 'success',
            'message' => 'users found',
            'users' => $users,
        ]);
    }
}