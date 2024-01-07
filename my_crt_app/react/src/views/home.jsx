import "../styles/home.css";
import * as React from "react";
import fakeData from "./fake.json";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PopupUser from "./popupUser";
import dateFormat from 'dateformat';
function Home() {
    const [expire, setExpire] = React.useState("");
    const [btnPopup, setBtnPopup] = React.useState(false);
    const loc = useLocation().state.domain;
    const [crtdata, setCrtdata] = React.useState([]);
    const url = 'http://127.0.0.1:8000/fetch/';
    const baseurl = `${url}` + `${loc}`;
    const [isChecked, setIsChecked] = React.useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    //////////////////

    React.useEffect(() => {

        axios.get(`${baseurl}`).then((response) => {
            var value = response.data[0]['not_after'];

            value = value.toString();
            if (value.includes('-')) {
                value = value.split("T")[0];

            }
            value = value.toString();
            setExpire(value);
            setCrtdata(response.data);


        })
            .catch(error => {
                console.log(error);
            });
    }, [crtdata])






    //here we will take it from API
    const Data = React.useMemo(() => fakeData, []);
    var thDay = new Date();

    const arr = Data.filter((d) => {

        return new Date(d['not_after']).getTime() > thDay.getTime();
    });

    const column = Object.keys(Data[0]);
    const keys1 = ["id", "entry_timestamp", "not_before", "not_after", "common_name", "name_value", "issuer_name"];
    const headers = [
        "crt.sh ID",
        "Logged At",
        "Not Before",
        "Not After",
        "Common Name",
        "Matching Identities",
        "Issuer Name"
    ]
    const ThData = () => {

        return headers.map((key, i) => {

            return <th key={i}>{key}</th>
        })
    }

    const tdData = () => {


        //crtdata
        if (crtdata.length > 0) {
            //crtdata
            return (isChecked) ? (arr.map((data, i) => {

                return (

                    <tr key={i}>
                        {
                            keys1.map((v, i) => {
                                var value = data[v];
                                value = value.toString();
                                if (value.includes('-')) {
                                    value = data[v].split("T")[0];

                                }
                                return <td key={i}>{value}</td>
                            })
                        }
                    </tr>
                )
            })) : (
                crtdata.map((data, i) => {
                    
                    return (

                        <tr key={i}>
                            {
                                keys1.map((v, i) => {
                                    var value = data[v];
                                    value = value.toString();
                                    if (value.includes('-')) {
                                        value = data[v].split("T")[0];

                                    }
                                    return <td key={i}>{value}</td>
                                })
                            }
                        </tr>
                    )
                }
                )
            )
        }
        else console.log("empty");
    }



    return (
        <>
            <div className="maincontainer">
                <PopupUser trigger={btnPopup} setTrigger={setBtnPopup} domain={loc} expire={expire}>

                </PopupUser>

                <p className="s1">You Are Searched about <label>{loc}</label> domain

                    <label className="btn-chk">
                        <input
                            className="int-chk"
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        Filter Expire One
                    </label>


                    <span className="s2"> Do You want to <button className="btnNot" onClick={() => {
                        setBtnPopup(true)

                    }}> Notify</button>

                        when close to expire?</span>
                </p>

                <div className="main">
                    <table className="table">
                        <thead>
                            <tr >{ThData()}</tr>
                        </thead>
                        <tbody>
                            {tdData()}
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}

export default Home;
