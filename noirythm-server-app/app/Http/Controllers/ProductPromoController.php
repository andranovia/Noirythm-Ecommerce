<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;



class ProductPromoController extends Controller
{
    public function ProductPromo()
    {
        $promoProducts = Product::whereNotNull('promo_text')->get();



        return response()->json($promoProducts);
    }
}
