<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClothProduct;
use App\Models\ShoesProduct;
use App\Models\TrouserProduct;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');


        $clothProducts = ClothProduct::where('product_name', 'like', '%' . $query . '%')
            ->orWhere('product_description', 'like', '%' . $query . '%')
            ->get();

        $shoesProducts = ShoesProduct::where('product_name', 'like', '%' . $query . '%')
            ->orWhere('product_description', 'like', '%' . $query . '%')
            ->get();

        $trousersProducts = TrouserProduct::where('product_name', 'like', '%' . $query . '%')
            ->orWhere('product_description', 'like', '%' . $query . '%')
            ->get();
        $combinedResults = [
            'clothProducts' => $clothProducts,
            'shoesProducts' => $shoesProducts,
            'trousersProducts' => $trousersProducts,
        ];

        return response()->json($combinedResults);
    }

}