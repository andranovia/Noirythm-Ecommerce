<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentRequest;
use Stripe\Checkout\Session;
use Stripe\Stripe;

class PaymentController extends Controller
{
    public function makePayment(PaymentRequest $request){

        Stripe::setApiKey(env('STRIPE_KEY'));
        


        $purchased_products_array = [];


        foreach ($request->input('purchased_products') as $purchased_product) {
            $purchased_products_array[] = [
                'name' => $purchased_product['name']
            ];
        }


        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $purchased_products_array[0]['name'] 
                    ],
                    'unit_amount' => $request->unit_amount,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => env('FRONTEND_URL') . '/success?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => env('FRONTEND_URL') . $request->current_url,
        ]);

        return response()->json(['url' => $session->url]);

    }
}
