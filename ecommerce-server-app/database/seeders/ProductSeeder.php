<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 

class ProductSeeder extends Seeder
{
  
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'product_name' => 'Trendy top',
                'product_description' => 'Classic cultural cloth with modern style.',
                'product_price' => 19.99,
                'product_image' => 'https://img.freepik.com/free-photo/white-back-sweater_125540-792.jpg?w=900&t=st=1693642092~exp=1693642692~hmac=eaadaba5988ff6bfbfebb0df01449169a04f83c821205bd45cb22703fbc21488',

            ],
            [
                'product_name' => 'Classy one',
                'product_description' => 'Another sample product description.',
                'product_price' => 29.99,
                'product_image' => 'https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13969.jpg?w=740&t=st=1693642270~exp=1693642870~hmac=0f078db70f3d264830e419becdf1ed17d7cea479bcf12072d3049ea71b98276e', 
            ],
            [
                'product_name' => 'Modern style',
                'product_description' => 'Another sample product description.',
                'product_price' => 29.99,
                'product_image' => 'https://img.freepik.com/free-photo/black-front-sweater_125540-763.jpg?w=900&t=st=1693643051~exp=1693643651~hmac=899e224f1acf1b20b22e988ee84e5723c5a2ec401ba1c15bffb296235f7cf345', 
            ],
            [
                'product_name' => 'Stylish mequirine ',
                'product_description' => 'Another sample product description.',
                'product_price' => 29.99,
                'product_image' => 'https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-14036.jpg?w=740&t=st=1693642991~exp=1693643591~hmac=f3fec8ada98e7078af6fc1760052a1cfffad8d10c699c5369f6a24f5a5b0b5c6', 
            ],
        ]);
    }
}
