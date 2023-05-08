import React, { useState } from "react";
import "./Receive.scss";

const Receive = () => {

    //creating otp state to handle the otp received as input
    const [otp,setOtp] = useState("");

    //inputHandler
    const inputHandler = (e) => {
        setOtp(e.target.value);
    }

    //submit Handler
    const submitHandler = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <div className="receive container d-flex justify-content-center align-items-center">
                <div className="receiveCard d-flex flex-column justify-content-center align-items-center">
                    <h2>Enter OTP to download file</h2>
                    <form action="" className="d-flex flex-column justify-content-center align-items-center">
                        <input type="text" onChange={inputHandler} min="6" max="6"/>
                        <button onClick={submitHandler} style={{display:"block",margin:"20px"}} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Receive;