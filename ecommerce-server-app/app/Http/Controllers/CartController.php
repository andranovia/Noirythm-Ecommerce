<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use App\Models\ClothProduct;
use App\Models\ShoesProduct;
use App\Models\TrouserProduct;
use App\Models\User;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        $userId = $request->input('userId');
        $productId = $request->input('productId');
        $productType = $request->input('productType');

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $product = null;
        switch ($productType) {
            case 'cloth':
                $product = ClothProduct::find($productId);
                break;
            case 'trouser':
                $product = TrouserProduct::find($productId);
                break;
            case 'shoes':
                $product = ShoesProduct::find($productId);
                break;
            default:
                return response()->json(['error' => 'Invalid product type'], 400);
        }

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $cartItem = CartItem::where('user_id', $userId)
                        ->where('product_id', $productId)
                        ->where('product_type', $productType)
                        ->first();

        if ($cartItem) {
            $cartItem->quantity += 1;
            $cartItem->save();
        } else {
            $cartItem = new CartItem();
            $cartItem->user_id = $userId;
            $cartItem->product_id = $productId;
            $cartItem->product_type = $productType;
            $cartItem->quantity = 1;
            $cartItem->save();
        }

        return response()->json(['message' => 'Item added to cart'], 200);
    }
}
