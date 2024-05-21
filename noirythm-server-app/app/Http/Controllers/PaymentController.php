<?php

namespace App\Http\Controllers;

use App\Http\Requests\PaymentRequest;
use Stripe\Checkout\Session;
use Stripe\PaymentIntent;
use Stripe\PaymentMethod;
use Stripe\Stripe;

class PaymentController extends Controller
{
    public function getCheckout($sessionId){

        Stripe::setApiKey(env('STRIPE_KEY'));

        try{
            $session = Session::retrieve($sessionId);

            $paymentIntent = PaymentIntent::retrieve($session->payment_intent);

            $paymentMethod = PaymentMethod::retrieve($paymentIntent->payment_method);

            $cardInfo = $paymentMethod->card;
            $lineItems = Session::allLineItems($sessionId);
            $purchasedProducts = [];

            foreach ($lineItems->data as $item) {
                $purchasedProducts[] = [
                    'name' => $item->description,
                    'amount' => $item->amount_total,
                    'currency' => $item->currency,
                    'quantity' => $item->quantity,
                ];
            }


            return response()->json([
                'sessionId' => $session->id,
                'customer_details' => $session->customer_details,
                'cardInfo' => $cardInfo,
                'purchasedProducts' =>  $purchasedProducts,
            ]);
            
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }



    }

    public function postCheckout(PaymentRequest $request)
    {

        Stripe::setApiKey(env('STRIPE_KEY'));



        $purchased_products_array = [];


        foreach ($request->input('purchased_products') as $purchased_product) {
           
            $purchased_products_array['name'] = $purchased_product['name'];
        };


        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' =>
                    $purchased_products_array,

                    'unit_amount' => $request->unit_amount,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => env('FRONTEND_URL') . '/payment/success/{CHECKOUT_SESSION_ID}',
            'cancel_url' => env('FRONTEND_URL') . $request->current_url,
        ]);

        return response()->json(['url' => $session->url]);
    }
}
