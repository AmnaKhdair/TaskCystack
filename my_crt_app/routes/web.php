<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\crtApi;
use App\Http\Controllers\MailController;
use App\Http\Controllers\userControllers;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::middleware(['cors'])->group(function () {
    Route::post('/hogehoge', 'Controller@hogehoge');
});
Route::get('/', function () {
    return view('welcome');
});
Route::get('fetch/{domain}',[crtApi::class,'fetchData']);

Route::get('send-email',[MailController::class,'index']);

Route::get('dbconn',function(){
    return view('dbconn');
});

Route::get('add',function(){
    return view('adduser');
});

Route::POST('adduser',[userControllers::class,'addUser']);