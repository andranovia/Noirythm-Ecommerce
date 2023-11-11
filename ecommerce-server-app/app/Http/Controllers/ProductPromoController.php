<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ClothProduct;
use App\Models\TrouserProduct;
use App\Models\ShoesProduct;


class ProductPromoController extends Controller
{
    public function ProductPromo()
    {
        $clothProducts = ClothProduct::whereNotNull('promo_text')->get();
        $trouserProducts = TrouserProduct::whereNotNull('promo_text')->get();
        $shoesProducts = ShoesProduct::whereNotNull('promo_text')->get();

        $allProducts = $clothProducts->merge($trouserProducts)->merge($shoesProducts);

        return response()->json($allProducts);
    }
}
