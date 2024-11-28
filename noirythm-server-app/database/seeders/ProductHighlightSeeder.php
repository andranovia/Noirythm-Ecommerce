<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class ProductHighlightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product_highlights')->insert([
            [
                'id' => Str::uuid(),
                'product_name' => 'Bethany UMC White crewneck sweatshirt',
                'product_description' => 'White crewneck sweatshirt green highlight.',
                'product_price' => 19.99,
                'product_image' => 'https://images.unsplash.com/photo-1619042821874-587aa4335f39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'promo_text' => null,
                'product_type' => 'cloth',

            ],
            [
                'id' => Str::uuid(),
                'product_name' => 'Black Slim Trousers',
                'product_description' => 'Stylish and functional cargo trousers.',
                'product_price' => 36.99,
                'product_image' => 'https://plus.unsplash.com/premium_photo-1661326297568-65045688d10a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                'promo_text' => null,
                'product_type' => 'trouser',
            ],
            [
                'id' => Str::uuid(),
                'product_name' => 'Oakland Athletic Clean Up Green Cap',
                'product_description' => 'Brand curved green Oakland Athletic adjustable hat.',
                'product_price' => 25.99,
                'product_image' => 'https://th.bing.com/th/id/OIP.4ijg7r9wbqewx43aIMjULwHaHa?rs=1&pid=ImgDetMain',
                'promo_text' => null,
                'product_type' => 'accessory',
            ],
        ]);
    }
}
