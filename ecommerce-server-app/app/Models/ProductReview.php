<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductReview extends Model
{
    use HasFactory;
    protected $primaryKey = 'comment_id'; 
    public $incrementing = true; 

    protected $fillable = ['product_id','user_id', 'rating', 'review_text', 'comment_Id'];
}
