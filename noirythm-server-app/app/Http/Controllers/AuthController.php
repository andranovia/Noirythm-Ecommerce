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
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Check email and password again',
                'errors' => $validator->errors(),
            ]);
        }
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $refreshToken = base64_encode(random_bytes(40));
        $user->refresh_token = $refreshToken;
        $user->save();
        $token = $user->createToken('auth_token')->plainTextToken;
        $success['name'] = $user->name;
        $success['email'] = $user->email;
        $success['token'] = $token;
        $success['refresh_token'] = $refreshToken;

        return response()->json([
            'success' => true,
            'message' => 'register success',
            'data' =>  $success,
        ], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            /** @var \App\Models\User $user **/
            $user = Auth::user();
            $refreshToken = base64_encode(random_bytes(40));
            $user->refresh_token = $refreshToken;
            $user->save();
            $token = $user->createToken('auth_token')->plainTextToken;
            $success['name'] = $user->name;
            $success['email'] = $user->email;
            $success['token'] = $token;
            $success['refresh_token'] = $refreshToken;

            return response()->json([
                'success' => true,
                'message' => 'Login success',
                'data' => $success,
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Check email and password again',
                'errors' => $validator->errors(),
            ], 403);
        }
    }




    public function logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        $response = [
            'success'   => true,
            'message'   => 'Logout Success '
        ];
        return response($response, 200);
    }

    public function refreshToken(Request $request)
    {
        $refreshToken = $request->input('refresh_token');
        /** @var \App\Models\User $user **/
        $user = Auth::user();

        if ($user->refresh_token === $refreshToken) {
            $newRefreshToken = base64_encode(random_bytes(40));
            $user->refresh_token =   $newRefreshToken;
            $user->save();
            $newToken = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'access_token' => $newToken,
                'refresh_token' => $newRefreshToken,
            ]);
        }
        return response()->json(['error' => 'Invalid refresh token'], 401);
    }
}
