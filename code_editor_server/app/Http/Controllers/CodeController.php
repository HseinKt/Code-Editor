<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;


class CodeController extends Controller

{

    public function getOutput(Request $request)
    {
        $response = Http::post("https://api.jdoodle.com/v1/execute", [
            'clientId' => '917f572690312065e575c94cd5444a8f',
            'clientSecret' => 'ca8d0e47352dfb6b8ffb494523672c72b51e6463539d0ce40651bb84566eb24d',
            "script" => $request->code,
            "language" => "python3",
            "versionIndex" => "4"

        ]);
        echo $response->getBody();
    }

    public function saveCode(Request $request)
    {
        $id = Auth::id();
        $username = User::where('id', $id)->value('username');



        $file_name = $request->file_name;
        $code = $request->code;

        Storage::put($username . '-' . $file_name . '.py', $code);
    }
}
