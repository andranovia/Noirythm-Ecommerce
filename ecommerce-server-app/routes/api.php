<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductReviewController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductPromoController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('products')->group(function () {
    Route::get('cloth', [ProductController::class, 'clothIndex']);
    Route::get('cloth/{id}', [ProductController::class, 'clothShow']);


    Route::get('trouser', [ProductController::class, 'trouserIndex']);
    Route::get('trouser/{id}', [ProductController::class, 'trouserShow']);


    Route::get('shoes', [ProductController::class, 'shoesIndex']);
    Route::get('shoes/{id}', [ProductController::class, 'shoesShow']);


    Route::delete('reviews/DeleteUserComment/{id}', [ProductReviewController::class, 'deleteComment']);
    Route::get('reviews/UserComment/{id}', [ProductReviewController::class, 'showUserComment']);

    Route::put('reviews/editComment/{id}', [ProductReviewController::class, 'updateComment']);
    Route::post('reviews/{id}', [ProductReviewController::class, 'store']);

    Route::get('productPromo', [ProductPromoController::class, 'ProductPromo']);
});


Route::get('/search', 'App\Http\Controllers\SearchController@search');

Route::get('cart/get', [CartController::class, 'getCart']);
Route::post('cart/add', [CartController::class, 'addToCart']);
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->post('logout', [AuthController::class, 'logout'])->name('logout');


Route::get('user', function () {

    return auth()->user();
})->middleware('auth:sanctum');
