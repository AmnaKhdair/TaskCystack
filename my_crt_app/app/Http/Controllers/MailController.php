<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\MailNotify;
class MailController extends Controller
{
    public function index(){
        $data=[
            'subject'=>'Close Certificate Expire',
            'body'=>'The certificate of Cystack.ps will close to expire after 30 days!'
        ];
        try{
         Mail::to('amenahabd2000@gmail.com')->send(new MailNotify($data));
         return response()->json(['check your mail box']);
        }
        catch(Exception $th){
            return response()->json(['something went wrong!']);
        }
    }
}