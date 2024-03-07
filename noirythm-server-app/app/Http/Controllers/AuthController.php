<?php

namespace App\Http\Controllers;



use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'problem found',
                'errors' => $validator->errors(),
            ]);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $success['token'] = $user->createToken('auth_token')->plainTextToken;
        $succes['name'] = $user->name;

        return response()->json([
            'success' => true,
            'message' => 'success register',
            'data' => $success,
        ]);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $auth = Auth::user();
            $success['token'] = $auth->createToken('auth_token')->plainTextToken;
            $success['name'] = $auth->name;
            $success['email'] = $auth->email;

            return response()->json([
                'success' => true,
                'message' => 'Login sukses',
                'data' => $success,
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Cek email dan password lagi',
               'errors' => $validator->errors(),
            ]);
        }
    }

    
    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        $response = [
            'success'   => true,
            'message'   => 'Berhasil Logout'
        ];
        return response($response, 200);
    }
}
