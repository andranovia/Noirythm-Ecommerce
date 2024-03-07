<?php


// ProductController.php
namespace App\Http\Controllers;


use App\Models\Product;

class ProductController extends Controller
{


    
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }


    public function productInfo($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }
}
