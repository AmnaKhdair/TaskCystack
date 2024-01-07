import "../styles/landing.css";
import img from "../assets/search1.png"
import * as React from "react";
import { useNavigate } from "react-router-dom";
export default function Landing()
{
    const nav=useNavigate();
    const [domain,setDomain]=React.useState('');
    return(
        <>
         <div className="container">
           <h1> Welcome to Our Website !</h1>
           <h2>This is your place to answer all questions about the Certificate of your favorite sites. </h2>
           <h3>Now what domain do you want to search for?</h3>
           <input className="int" type="text" name="domainName" placeholder="Enter the Domain ..." autoComplete="off" onChange={(e)=>{setDomain(e.target.value)}}/>
           <button className="btn" onClick={()=>{nav('/home',{replace:true,state:{domain}})}}><img src={img}/></button>
        </div>
        </>
       
    )
}