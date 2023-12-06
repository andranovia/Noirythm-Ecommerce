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
    public function getCart(Request $request)
    {
        $userId = $request->input('userId');

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $cartItems = CartItem::where('user_id', $userId)->pluck('product_id');

        $products = [];

        foreach ($cartItems as $productId) {
            $product = ClothProduct::find($productId);
            if (!$product) {
                $product = TrouserProduct::find($productId);
            }
            if (!$product) {
                $product = ShoesProduct::find($productId);
            }

            if ($product) {
                $products[] = $product;
            }
        }

        return response()->json(['cartProducts' => $products], 200);
    }

    public function addToCart(Request $request)
    {
        $userId = $request->input('userId');
        $productId = $request->input('productId');

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $product = null;
        $product = ClothProduct::find($productId);
        if (!$product) {
            $product = TrouserProduct::find($productId);
        }
        if (!$product) {
            $product = ShoesProduct::find($productId);
        }

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $cartItem = CartItem::where('user_id', $userId)
            ->where('product_id', $productId)
            ->first();

        if ($cartItem) {
            $cartItem->quantity += 1;
            $cartItem->save();
        } else {
            $cartItem = new CartItem();
            $cartItem->user_id = $userId;
            $cartItem->product_id = $productId;
            $cartItem->quantity = 1;
            $cartItem->save();
        }

        return response()->json(['message' => 'Item added to cart'], 200);
    }
}
