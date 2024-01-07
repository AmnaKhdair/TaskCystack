<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailNotify;
use DateTime;
use Illuminate\Support\Facades\DB;
class notify extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:email';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'send email to user for close expire certificate';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        
        $tmp = (new DateTime)->format('Y-m-d');
        $year =(new DateTime)->format('Y');
        $email= DB::table('user')
           ->select('email','expireDate','duration',"domainName")
           ->whereDate('created_at', '=', $tmp)
            ->get()->toArray();
          
        $array = json_decode(json_encode($email),true);
        foreach($array as $e) {
            $time = strtotime($e['expireDate']);
            $y2 = date('Y',$time);
            if($y2==$year)
            {
                $date1 = new DateTime();
                $date2 = new DateTime($e['expireDate']);
                $days  = $date2->diff($date1)->format('%a'); 
                if(!strcmp( $e['duration'], '60' )&&($days ==60) )
                {
                    $data=[
                        'subject'=>'Close Certificate Expire',
                        'body'=>'The certificate of '. $e['domainName'] .'will close to expire after 60 days!'
                    ];
                    Mail::to($e['email'])->send(new MailNotify($data));
                 
                 
                }
                else if(!strcmp( $e['duration'], '30' )&&($days ==30))
                {
                    $data=[
                        'subject'=>'Close Certificate Expire',
                        'body'=>'The certificate of '. $e['domainName'] .'will close to expire after 30 days!'
                    ];
                    Mail::to($e['email'])->send(new MailNotify($data));
                }
               }
               
        }
       
       
        return 0;
    }
}
