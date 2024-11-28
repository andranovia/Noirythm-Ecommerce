<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_highlights', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('product_name');
            $table->text('product_description');
            $table->decimal('product_price', 8, 2);
            $table->string('product_image');
            $table->string('promo_text')->nullable();
            $table->string('product_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_highlights');
    }
};
