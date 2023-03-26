<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Message;


class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getAllUsers', 'sendMessage','getMessages']]);
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

    public function sendMessage(Request $request) 
    {
        $sender_id = $request->sender_id;
        $target_id  = $request->target_id;
        $body = $request->message_body;

        if ($sender_id != $target_id) 
        {
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
        }
        else 
        {
            return response()->json([
                'status' => 'error',
                'message' => 'this is the same user',
            ]);
        }
    }

    public function getMessages(Request $request)
    {
        $messages = Message::where('sender_id',$request->sender_id)->get();
        
        return response()->json([
            'status' => 'success',
            'message' => 'messages founded',
            'users' => $messages,
        ]);
    }
}