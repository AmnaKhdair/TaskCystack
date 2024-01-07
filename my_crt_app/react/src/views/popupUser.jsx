import * as React from "react";
import "../styles/popupUser.css";
import axios from "axios";
export default function PopupUser(props) {
    const [duration, setDuration] = React.useState("30");
    const [email, setEmail] = React.useState("");
    const baseurl = 'http://127.0.0.1:8000/adduser';
    function onChangeValue(event) {
        setDuration(event.target.value);

    }

    const token = document.querySelector('meta[name="csrf-token"]');

    const handleSubmit = (e) => {
        console.log("enter!")
        e.preventDefault();
        const user = {
            email: email,
            domainName: props.domain,
            duration: duration,
            expireDate: props.expire
        }
        const response = axios.post(`${baseurl}`, user, {
            "Content-Type": "application/json",
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": token.content
        },)
            .then((response) => {
                console.log(response)
            })
            .catch(() => {
                console.log("error!")
            });

        props.setTrigger(false);
    };



    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <form className="form" onSubmit={handleSubmit}>

                    <h1 className="title">Email Notification Form</h1>
                    <div >
                        <label className="btnForm">
                            <input type="email" placeholder="Enter Email .." name="email" className="emailInt" onChange={(e) => { setEmail(e.target.value) }} />
                            Enter Your Email that you want reach notification on

                        </label>
                    </div>
                    <div className="mainDur" onChange={onChangeValue} >
                        <label className="dur">Duration Before Expire: </label>
                        <label className="dur">
                            <input type="radio" value="30" name="duration" checked={duration === "30"} className="intdur" />
                            30 Days
                        </label>

                        <label className="dur">
                            <input type="radio" value="60" name="duration" checked={duration === "60"} className="intdur" />
                            60 Days
                        </label>
                    </div>


                    <div className="btn-Cont">
                        <button type="submit" className="btn-cls" > Save</button>
                    </div>
                </form>

                {props.childern}
            </div>
        </div>
    ) : ""

}