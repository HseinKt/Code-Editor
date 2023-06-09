<?php

namespace App\Http\Controllers;

use App\Models\SavedCodes;
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
        $name = $username . '-' . $file_name . '.py';
        Storage::put('saved_codes/' . $name, $code);
        $existing_code = SavedCodes::where('file_url', $name)->first();

        if ($existing_code) {
            return response()->json(
                [
                    'status' => 'failed',
                    'error' => 'file_name_exits'
                ]

            );
        } else {
            // File URL does not exist, create a new SavedCodes instance
            $save_code = new SavedCodes();
            $save_code->user_id = $id;
            $save_code->created_at = now()->format('d-m-y');
            $save_code->file_url = $name;
            $save_code->save();
        }

        return response()->json(
            [
                'status' => 'success'
            ]

        );
    }

    public function getFilesNames()
    {
        $id = Auth::id();
        $records = SavedCodes::where('user_id', $id)->get();

        $fileUrls = $records->pluck('file_url');

        return response()->json(['fileUrls' => $fileUrls]);
    }

    public function getCodeFromFileName(Request $request)
    {
        $name = $request->name;

        $code = Storage::get('saved_codes/' . $name);

        if ($code) {
            $data = [
                'file_name' => $name,
                'code' => $code,
            ];
            return response()->json($data);
        } else {
            return response()->json(['error' => 'File not found'], 404);
        }
    }


    public function downloadFile(Request $request)
    {
        $file_name = $request->file_name;
        $fileContent = Storage::get('saved_codes/' . $file_name);
        echo $fileContent;
        // return response()->json(['name' => $file_name]);
        // $path = Storage::path('saved_codes/' . $file_name);
        // echo response()->download($path, $file_name);
        // return response()->download($path, $file_name);
        // echo 'hello';
    }
}
