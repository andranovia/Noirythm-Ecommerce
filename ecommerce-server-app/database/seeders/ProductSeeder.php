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
                'product_description' => 'Trendsetter the timeless zone.',
                'product_price' => 15.99,
                'product_image' => 'https://img.freepik.com/free-photo/white-back-sweater_125540-792.jpg?w=900&t=st=1693642092~exp=1693642692~hmac=eaadaba5988ff6bfbfebb0df01449169a04f83c821205bd45cb22703fbc21488',

            ],
            [
                'product_name' => 'Classy one',
                'product_description' => 'Classic cultural cloth with modern style.',
                'product_price' => 29.99,
                'product_image' => 'https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13969.jpg?w=740&t=st=1693642270~exp=1693642870~hmac=0f078db70f3d264830e419becdf1ed17d7cea479bcf12072d3049ea71b98276e', 
            ],
            [
                'product_name' => 'Modern style',
                'product_description' => 'Modern product with the memories.',
                'product_price' => 19.99,
                'product_image' => 'https://img.freepik.com/free-photo/black-front-sweater_125540-763.jpg?w=900&t=st=1693643051~exp=1693643651~hmac=899e224f1acf1b20b22e988ee84e5723c5a2ec401ba1c15bffb296235f7cf345', 
            ],
            [
                'product_name' => 'Stylish mequirine ',
                'product_description' => 'Style what you want, and show the others.',
                'product_price' => 39.99,
                'product_image' => 'https://img.freepik.com/free-photo/graphic-tshirt-trendy-design-mockup-presented-wooden-hanger_460848-14036.jpg?w=740&t=st=1693642991~exp=1693643591~hmac=f3fec8ada98e7078af6fc1760052a1cfffad8d10c699c5369f6a24f5a5b0b5c6', 
            ],
            [
                'product_name' => 'Aurora Borealis Velvet Dress',
                'product_description' => 'Elegant and luxurious, the Aurora Borealis Velvet Dress is a captivating piece of eveningwear.',
                'product_price' => 49.99,
                'product_image' => 'https://img.freepik.com/free-photo/spring-wardrobe-switch-still-life_23-2150176770.jpg?w=360&t=st=1694434208~exp=1694434808~hmac=d9fc4e8ecb58b73ef6a8751d464c5d14b70909d96bf314e75c6bbf2993c697fe', 
            ],
            [
                'product_name' => 'Dad and son couple dress',
                'product_description' => 'Modern style with the family, made with love.',
                'product_price' => 39.99,
                'product_image' => 'https://img.freepik.com/free-photo/assortment-father-son-clothing_23-2148868937.jpg?w=360&t=st=1694434377~exp=1694434977~hmac=3a0996599cf0a535ee0b1406e66c41b6f9c32d1babc418996ef1c0f645c56f67', 
            ],
            [
                'product_name' => 'Evening Dress',
                'product_description' => 'With its rich fabric and flattering silhouette.',
                'product_price' => 25.99,
                'product_image' => 'https://img.freepik.com/free-photo/shirt-hanger-with-green-background_23-2150264162.jpg?w=360&t=st=1694434810~exp=1694435410~hmac=b396b96c749c2d3f05eb491d3f20d82a3573fa7b5f9346554b61b271e798dc39', 
            ],
            [
                'product_name' => 'Wedding Dress',
                'product_description' => 'The delicate lace patterns enhance its romantic charm, making it the perfect choice for your special day.',
                'product_price' => 34.99,
                'product_image' => 'https://img.freepik.com/free-photo/wedding-suit_1157-4641.jpg?w=996&t=st=1694434656~exp=1694435256~hmac=f7f77c243a6192b50a2dcde7137a81eda15882f2edbce41e8fcf3c9701e60053', 
            ],
        ]);
    }
}
