

import React from "react";
import "./Navbar.css";  
import {  useRecoilState } from "recoil";
import { showTextAtom } from "./atoms";




const Navbar = () => {
  const [showtext, setShowText ] = useRecoilState(showTextAtom);

  const onButtonClick = ()=> {
      setShowText(!showtext)
  };
  
  return (
      
    <div className="header">
      <div className="container">
         
     
        <h1>
          Cinema<span className="primary">city</span>
        </h1>
        <ul className="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">setting</a>
          </li>
          <li>
            <a href="/">about </a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
        <button className="btn" onClick={onButtonClick}>Book ticket </button>
        </div>
       
      </div>
    </div>
    
  );
};
export default Navbar;

