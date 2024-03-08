<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductReview;
use App\Models\User;

class ProductReviewController extends Controller
{
    public function storeReview(Request $request, $id)
    {

        $validatedData = $request->validate([
            'rating' => 'required|integer',
            'review_text' => 'required|string',
        ]);

        $userId = $request->input('userId');

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $productReview = new ProductReview;
        $productReview->ratings = $validatedData['rating'];
        $productReview->review_texts = $validatedData['review_text'];
        $productReview->user_id = $userId;
        $productReview->product_id = $id;



        if ($productReview->save()) {
            return response()->json(['message' => 'Review has been submitted successfully', 'commentId' => $productReview->commentId], 201);
        } else {
            return response()->json(['message' => 'Review submission was not successful'], 500);
        }
    }



    public function updateReview(Request $request, $id)
    {
        $validatedData = $request->validate([
            'rating' => 'required|integer',
            'review_text' => 'required|string',
        ]);

        $productReview = ProductReview::find($id);

        if (!$productReview) {
            return response()->json(['message' => 'Review not found'], 404);
        }

        $userId = $request->input('userId');

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }


        $productReviews = ProductReview::where('comment_id', $id)
            ->where('user_id', $userId)
            ->get();

        if ($productReviews->isEmpty()) {
            return response()->json(['error' => 'No reviews found for this product by the user'], 404);
        }

        $productReview->ratings = $validatedData['rating'];
        $productReview->review_texts = $validatedData['review_text'];

        if ($productReview->save()) {
            return response()->json(['message' => 'Review has been updated successfully'], 200);
        } else {
            return response()->json(['message' => 'Review update was not successful'], 500);
        }
    }

    public function deleteReview(Request $request, $id)
    {
        $productReview = ProductReview::find($id);
        $userId = $request->input('userId');

        $user = User::find($userId);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }


        $productReviews = ProductReview::where('comment_id', $id)
            ->where('user_id', $userId)
            ->get();

        if ($productReviews->isEmpty()) {
            return response()->json(['error' => 'No reviews found for this product by the user'], 404);
        }
        if ($productReview) {
            $productReview->delete();
            return response()->json(['message' => 'Comment deleted successfully'], 200);
        } else {
            return response()->json(['message' => 'Comment not found'], 404);
        }
    }
}
