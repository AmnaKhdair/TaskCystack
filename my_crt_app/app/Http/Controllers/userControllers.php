<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Haruncpi\LaravelIdGenerator\IdGenerator;
class userControllers extends Controller
{
  function addUser(Request $req)
  {
    

    $id = IdGenerator::generate(['table' => 'user', 'length' => 6, 'prefix' => date('y')]);
    
    $user = User::create([

        'email' => request()->email, 

        'domainName' =>  request()->domainName, 

        'duration' => request()->duration,

        'expireDate' => request()->expireDate,
        'id' => $id,
        
    ]);
   }
}