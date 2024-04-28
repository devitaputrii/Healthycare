<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// Show all cart
$router->get('/keranjang', 'KeranjangController@getKeranjang');

// get quantity berdasarkan id product
$router->get('/keranjang/quantity/{obat_id}', 'KeranjangController@getTotalQuantity');

$router->get('/', function () use ($router) {
    return $router->app->version();
});
