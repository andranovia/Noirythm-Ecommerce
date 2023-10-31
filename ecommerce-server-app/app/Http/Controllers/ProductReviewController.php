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
        $reviewText = ProductReview::where('product_id', $id)->pluck('reviewText')->toArray();

        return response()->json([
            'rating' => $rating,
            'reviewText' => $reviewText,
        ], 200);
    }
    
    public function updateComment(Request $request, $id)
    {
        $validatedData = $request->validate([
            'rating' => 'required|integer',
            'reviewText' => 'required|string',
        ]);
    
        $productReview = ProductReview::find($id);
    
        if (!$productReview) {
            return response()->json(['message' => 'Review not found'], 404);
        }
        
        $productReview->rating = $validatedData['rating'];
        $productReview->reviewText = $validatedData['reviewText'];

        $productReview->update();
        
    
        if ($productReview->save()) {
            return response()->json(['message' => 'Review has been updated successfully'], 200);
        } else {
            return response()->json(['message' => 'Review update was not successful'], 500);
        }
    }
    

}
