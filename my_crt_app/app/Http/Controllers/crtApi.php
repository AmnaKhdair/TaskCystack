<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class crtApi extends Controller
{
   function fetchData($id)
   {
    return Http::get('https://crt.sh/?q='.$id.'&output=json')->body();
   }
}

