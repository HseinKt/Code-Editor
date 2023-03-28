<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Message;


class UserController extends Controller
{
    public function getAllUsers()
    {
        $users = User::all();

        return response()->json([
            'status' => 'success',
            'message' => 'users found',
            'users' => $users,
        ]);
    }

    public function searchByName(Request $request)
    {
        $name = $request->first_name;
        $users = User::where('first_name', 'LIKE', "%$name%")->get();

        return response()->json([
            'status' => 'success',
            'message' => 'user founded',
            'users' => $users,
        ]);
    }
    
    public function sendMessage(Request $request) 
    {
        $sender_id = Auth::id();
        $target_id = $request->target_id;
        $body = $request->message_body;

        if ($sender_id != $target_id) {
            $message = Message::create([
                'message_body' => $body,
                'sender_id' => $sender_id,
                'target_id' => $target_id,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'message sent',
                'users' => $message,
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'this is the same user',
            ]);
        }
    }

    public function getMessages($target_id="")
    {   
        $user = Auth::id();
        // $messages = Message::where('sender_id',$user)->get();
        
        $messages = Message::where(function ($query) use ($user, $target_id) {
            $query->where('sender_id',$user)
                    ->where('target_id',$target_id);
        })
        ->orWhere(function ($query) use ($user, $target_id) {
            $query->where('sender_id',$target_id)
                    ->where('target_id',$user);
        })
        ->get();

        return response()->json([
            'status' => 'success',
            'message' => 'messages founded',
            'users' => $messages,
        ]);
    }
    // public function getPicture(){

    // }
}
