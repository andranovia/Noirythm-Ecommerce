<?php


// ProductController.php
namespace App\Http\Controllers;

use App\Models\ClothProduct;
use App\Models\TrouserProduct;
use App\Models\ShoesProduct;

class ProductController extends Controller
{


    
    public function clothIndex()
    {
        $products = ClothProduct::all();
        return response()->json($products);
    }

    public function trouserIndex()
    {
        $products = TrouserProduct::all();
        return response()->json($products);
    }

    public function shoesIndex()
    {
        $products = ShoesProduct::all();
        return response()->json($products);
    }

    public function clothShow($id)
    {
        $product = ClothProduct::find($id);

        if (!$product) {
            return response()->json(['message' => 'Cloth product not found'], 404);
        }

        return response()->json($product);
    }

    public function trouserShow($id)
    {
        $product = TrouserProduct::find($id);

        if (!$product) {
            return response()->json(['message' => 'Trouser product not found'], 404);
        }

        return response()->json($product);
    }

    public function shoesShow($id)
    {
        $product = ShoesProduct::find($id);

        if (!$product) {
            return response()->json(['message' => 'Shoes product not found'], 404);
        }

        return response()->json($product);
    }
}
