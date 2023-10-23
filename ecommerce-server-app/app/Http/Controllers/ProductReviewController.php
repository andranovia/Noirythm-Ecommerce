<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ProductReview;

class ProductReviewController extends Controller
{
    public function store(Request $request, $id)
    {

        $validatedData = $request->validate([
            'rating' => 'required|integer',
            'reviewText' => 'required|string',
        ]);

     
        $productReview = new ProductReview;
        $productReview->rating = $validatedData['rating'];
        $productReview->reviewText = $validatedData['reviewText'];
        $productReview->product_id = $id;


        if ($productReview->save()) {
            return response()->json(['message' => 'Review has been submitted successfully'], 201);
        } else {
            return response()->json(['message' => 'Review submission was not successful'], 500);
        }
    }
    public function showUserComment($id)
    {
    
        $rating = ProductReview::where('product_id', $id)->avg('rating');
        $reviewText = ProductReview::where('product_id', $id)->pluck('reviewText')->first();

        return response()->json([
            'rating' => $rating,
            'reviewText' => $reviewText,
        ], 200);
    }

}
