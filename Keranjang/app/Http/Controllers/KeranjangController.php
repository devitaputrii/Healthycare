<?php

namespace App\Http\Controllers;

use illuminate\Http\Request;
use illuminate\Support\Facades\Response;

class KeranjangController extends Controller
{
    private $keranjang_items = [
        ["user_id" => 1, "obat_id" => 1, "quantity" => 2],
        ["user_id" => 2, "obat_id" => 2, "quantity" => 1],
        ["user_id" => 3, "obat_id" => 3, "quantity" => 3]
    ];

    function getKeranjang(){
        return response()->json($this->keranjang_items);
    }

    function getTotalQuantity($obat_id){
        $total_quantity = array_reduce($this->keranjang_items, function($carry, $item) use ($obat_id){
            if($obat_id == $item['obat_id']){
                $carry += $item['quantity'];
            }
            return $carry;
        }, 0);

        return response()->json(
            [
                'obat_id' => $obat_id, 
                'total_quantity' => $total_quantity
            ]
        );
    }
}
