<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductInfoResource extends JsonResource
{
    /**
     * Calculate the average rating manually.
     *
     * @return float|null
     */
    private function calculateAverageRating()
    {
        $reviews = $this->resource->productReview;

        if ($reviews->isEmpty()) {
            return null;
        }

        return $reviews->avg('ratings');
    }
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'product_name' => $this->product_name,
            'product_description' => $this->product_description,
            'product_image' => $this->product_image,
            'promo_text' => $this->promo_text,
            'product_type' => $this->product_type,
            'product_reviews' => $this->productReview,
            'average_rating' => $this->calculateAverageRating()
        ];
    }
}
