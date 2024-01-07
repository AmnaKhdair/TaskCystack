<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
   
    public $timestamp=false;
    protected $table = 'user';
    protected $fillable = ['email','domainName','duration','expireDate','id','updated_at','created_at'];
    protected $primarykey='sno';
    use HasFactory;
  
}
