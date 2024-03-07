<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClothProduct;
use App\Models\Product;
use App\Models\ShoesProduct;
use App\Models\TrouserProduct;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');


        $products = Product::where('product_name', 'like', '%' . $query . '%')
            ->orWhere('product_description', 'like', '%' . $query . '%')
            ->get();

        return response()->json($products);
    }

}