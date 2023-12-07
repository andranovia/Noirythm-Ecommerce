<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductReview extends Model
{
    use HasFactory;
    protected $primaryKey = 'commentId'; 
    public $incrementing = true; 

    protected $fillable = ['product_id', 'rating', 'reviewText', 'commentId'];
}
