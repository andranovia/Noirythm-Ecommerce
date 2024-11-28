<?php


// ProductController.php
namespace App\Http\Controllers;

use App\Http\Resources\ProductInfoResource;
use App\Models\Product;
use App\Models\ProductHighlight;

class ProductController extends Controller
{



    public function index()
    {
        $products = Product::all()->merge(ProductHighlight::all());

        foreach ($products as $product) {
            $product['average_rating'] = $product->averageRating();
        }

        return response()->json($products);
    }


    public function productInfo($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json(
            new ProductInfoResource($product)
        );
    }

    public function productHighlight()
    {
        $products = ProductHighlight::all();

        foreach ($products as $product) {
            $product['average_rating'] = $product->averageRating();
        }

        return response()->json($products);
    }
}
