<?php


use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductReviewController;


Route::prefix('products')->group(function () {
    Route::get('cloth', [ProductController::class, 'clothIndex']);
    Route::get('cloth/{id}', [ProductController::class, 'clothShow']);
   

    Route::get('trouser', [ProductController::class, 'trouserIndex']);
    Route::get('trouser/{id}', [ProductController::class, 'trouserShow']);


    Route::get('shoes', [ProductController::class, 'shoesIndex']);
    Route::get('shoes/{id}', [ProductController::class, 'shoesShow']);

    Route::post('reviews/{id}', [ProductReviewController::class, 'store']);;
    Route::get('reviews/UserComment/{id}', [ProductReviewController::class, 'showUserComment']);
});

Route::get('/search', 'App\Http\Controllers\SearchController@search');


