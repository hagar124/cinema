import React from "react";
import './Footer.css'

const Footer =()=>{
    return (
    <div className="footer">
        <div className="container">
            <div className="col col-1">
                <h1>Cinema<span className="primary">City</span></h1>
            </div>
            <div className="col">
                <h5>Support</h5>
                <span className="bar"> </span>
                    <a href="/">Contact Us</a>
                   
            </div>
            <div className="col">
                <h5>Security</h5>
                <span className="bar"> </span>
                    <a href="/">Introduction</a>
                   
               
            </div>
            <div className="col">
                <h5>Settings</h5>
                <span className="bar"> </span>
                    <a href="/">Search Setting</a>
                  
               
            </div>
           
        </div>

    </div>



    )

}
export default Footer