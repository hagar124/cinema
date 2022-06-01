import React from "react";
import "./Hero.css";
import crypto from '../assets/movie-img.png'
import {  useRecoilState } from "recoil";
import { showTextAtom } from "./atoms";
function Hero() {
    
        const [showText, setShowText ] = useRecoilState(showTextAtom);
    
        const onButtonClick = ()=> {
            setShowText(!showText)
        };
    return (
        <div className="hero">
            <div className="container">
                {/*Left Side*/}
                <div className="Left">
                    <h1>welcome to the best cinema in the middle east </h1>
                  
                    <h4> Dear customer, you can book your ticket bellow </h4>
                    <div className="input-container">
                       
                        <button className="btn" onClick={onButtonClick}>Book ticket </button>
                    </div>
                </div>
                {/* Right Side*/}
                <div className="right">
                    <div className="img-container">
                        <img src={crypto}   alt=''/>
                    </div>
                </div>
                


            </div>
        </div>
    );
}
export default Hero;
