<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductReview extends Model
{
    use HasFactory;
    protected $primaryKey = 'commentId'; // Set the primary key to commentId
    public $incrementing = true; // Make it auto-incrementing

    protected $fillable = ['product_id', 'rating', 'reviewText', 'commentId'];
}
