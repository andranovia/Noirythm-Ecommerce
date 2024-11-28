<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductHighlight extends Model
{
    use HasFactory;
    protected $table = 'product_highlights';
    public $incrementing = false;

    public function productReview()
    {
        return $this->hasMany(ProductReview::class, 'product_id', 'id');
    }

    public function averageRating()
    {
        return $this->productReview->avg('ratings');
    }
}
