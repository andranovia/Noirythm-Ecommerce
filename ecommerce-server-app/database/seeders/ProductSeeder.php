<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB; 

class ProductSeeder extends Seeder
{
  
    public function run(): void
    {
        DB::table('clothProducts')->insert([
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
        DB::table('trouserProducts')->insert([
            [
                'product_name' => 'Casual Cargo Pants',
                'product_description' => 'Comfortable and practical cargo pants for everyday wear.',
                'product_price' => 34.99,
                'product_image' => 'https://img.freepik.com/free-photo/light-brown-beige-pants-indoors-still-life_23-2150756308.jpg?w=996&t=st=1695013267~exp=1695013867~hmac=e77253688667bd57da1b36b0159d0ca888839bd1b7a3117db592e28a2da96d53',
            ],
            [
                'product_name' => 'Slim-Fit Jeans',
                'product_description' => 'Stylish slim-fit jeans that fit perfectly.',
                'product_price' => 39.99,
                'product_image' => 'https://img.freepik.com/free-photo/hand-holding-light-brown-beige-pants_23-2150756279.jpg?w=360&t=st=1695013551~exp=1695014151~hmac=f9277b2dd6cdc0a18f9f94381f19f552d0c392bb0da9f5315fa1308a5eab2bf1',
            ],
            [
                'product_name' => 'Formal Dress Pants',
                'product_description' => 'Elegant dress pants for formal occasions.',
                'product_price' => 49.99,
                'product_image' => 'https://img.freepik.com/free-photo/man-wearing-brown-pants-close-up_53876-102239.jpg?w=360&t=st=1695013719~exp=1695014319~hmac=0dd2f2a4392715472012181559242dc48df8630ab1a6810e93bc5ac3e98585b8',
            ],
            [
                'product_name' => 'Athletic Joggers',
                'product_description' => 'Comfortable joggers for your active lifestyle.',
                'product_price' => 29.99,
                'product_image' => 'https://img.freepik.com/free-photo/plain-blue-leggings-isolated-sportswear-apparel-studio-shoot_53876-102884.jpg?w=360&t=st=1695014000~exp=1695014600~hmac=ef76fb772ef00707140cb7f57f5b17b9284c332e3d8e19aff4634c1de187087b',
            ],
            [
                'product_name' => 'Cargo Short',
                'product_description' => 'Stylish and functional cargo short.',
                'product_price' => 24.99,
                'product_image' => 'https://img.freepik.com/free-photo/casual-men-short-pants_1203-8186.jpg?w=740&t=st=1695014112~exp=1695014712~hmac=2626a4318123f4227189a74969cc1ce4e04b4cc8204c08dd81ce09859da543d8',
            ],
            [
                'product_name' => 'Classic Chinos',
                'product_description' => 'Versatile classic chinos that go well with any outfit.',
                'product_price' => 44.99,
                'product_image' => 'https://img.freepik.com/free-photo/beige-loose-pants-white-tee-women-s-fashion-closeup_53876-102147.jpg?w=360&t=st=1695013957~exp=1695014557~hmac=3f064545b431a91f1e6cb22e94195f520eb66414c87b8c1ab67cea0fbeaf5ba7',
            ],
            [
                'product_name' => 'Workout Leggings',
                'product_description' => 'High-performance leggings for your workouts.',
                'product_price' => 19.99,
                'product_image' => 'https://img.freepik.com/free-photo/side-view-man-working-out-outdoors-athletic-wear_23-2148773864.jpg?w=360&t=st=1695014084~exp=1695014684~hmac=e123bd53fae1d4b70b624fe3db4da8c6977050cffd6fcdf715b30d39529ecee6',
            ],
            [
                'product_name' => 'Cargo Trousers',
                'product_description' => 'Durable cargo trousers with plenty of pockets.',
                'product_price' => 36.99,
                'product_image' => 'https://img.freepik.com/premium-photo/green-color-jeans-pant-cargo-trouser-sports-bottom-joggers-isolated-white-with-clipping-path_38810-9300.jpg?w=360',
            ],
        ]);
        DB::table('shoesProducts')->insert([
            [
                'product_name' => 'Running Shoes',
                'product_description' => 'Comfortable running shoes for your active lifestyle.',
                'product_price' => 59.99,
                'product_image' => 'https://img.freepik.com/free-photo/pair-trainers_144627-3810.jpg?w=900&t=st=1695037170~exp=1695037770~hmac=0ccd22573a84f025498ad26bf992b7972b9c6ad2914e0c1df1b367e28e27b46c',
            ],
            [
                'product_name' => 'Casual Sneakers',
                'product_description' => 'Stylish and casual sneakers for everyday wear.',
                'product_price' => 49.99,
                'product_image' => 'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?w=900&t=st=1695037206~exp=1695037806~hmac=9a50554e6a954b9b09979ebe5e5f0ed107546d01d5d68e7367f5d00ea852b86c',
            ],
            [
                'product_name' => 'Formal Dress Shoes',
                'product_description' => 'Elegant dress shoes for formal occasions.',
                'product_price' => 79.99,
                'product_image' => 'https://img.freepik.com/free-photo/brown-leather-slip-men-s-shoes-fashion_53876-104481.jpg?w=900&t=st=1695037255~exp=1695037855~hmac=14281a532f8cdf531f3c9f122ee6698f2ab2856e4658c241dc2ee88b22f21839',
            ],
            [
                'product_name' => 'Athletic Training Shoes',
                'product_description' => 'High-performance training shoes for your workouts.',
                'product_price' => 69.99,
                'product_image' => 'https://img.freepik.com/free-photo/closeup-sportswoman-jogging-running-track-health-club_637285-7816.jpg?w=900&t=st=1695037289~exp=1695037889~hmac=73e614d48df316d65d2129d4d547f6f3ea465a52261d99e90ac26c0bd936e33f',
            ],
            [
                'product_name' => 'Slip-On Loafers',
                'product_description' => 'Comfortable slip-on loafers for a relaxed style.',
                'product_price' => 54.99,
                'product_image' => 'https://img.freepik.com/free-photo/white-sandals-summer-footwear-fashion_53876-101521.jpg?w=900&t=st=1695037332~exp=1695037932~hmac=ae9310b1cba0fae03cab0858896923ee1c2e0849e20552561eab215ddaf6d298',
            ],
            [
                'product_name' => 'Hiking Boots',
                'product_description' => 'Durable hiking boots for outdoor adventures.',
                'product_price' => 89.99,
                'product_image' => 'https://img.freepik.com/free-photo/leather-boots-women-legs_158595-3967.jpg?w=900&t=st=1695037396~exp=1695037996~hmac=61d2996a237387fc17c18e1818b4b7638ca14bd7ba1bab75d274cc8092c1f34a',
            ],
            [
                'product_name' => 'Classic Oxfords',
                'product_description' => 'Versatile classic oxfords for formal and casual occasions.',
                'product_price' => 74.99,
                'product_image' => 'https://img.freepik.com/free-photo/brown-man-s-leather-derby-shoes_53876-97144.jpg?w=900&t=st=1695037423~exp=1695038023~hmac=97a547aff24537d1cb6658c70adf3a2b3b625f16a746b01ff59cb16ae6b03cff',
            ],
            [
                'product_name' => 'Trendy Sneakers',
                'product_description' => 'Casual Trendy Sneakers that fits you better.',
                'product_price' => 49.99,
                'product_image' => 'https://img.freepik.com/free-photo/background-red-retro-model-tennis_1203-3993.jpg?w=900&t=st=1695037475~exp=1695038075~hmac=78aab05cec5350d5a3c3b0a66a90ea2e57c6be181a3b0f728c225ae4ff0f040b',
            ],
        ]);
        
        
        
    }
}
