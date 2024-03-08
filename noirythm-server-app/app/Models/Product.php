<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'Products';
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
