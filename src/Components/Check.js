import React from "react";
// import{useState} from "react"
import '../App.css';

function Check() {
 

  return (
    <div className="check">
      <h2>La Cuenta</h2>
      <div className="add-options">
      <p className="">Your options are:</p>
      <ul className="">
        <li>uno</li>
        <button className="delete">Delete</button>
        <li>dos</li>
        <button className="delete">Delete</button>
        <li>tres</li>
        <button className="delete">Delete</button>
        <li>cuatro</li>
        <button className="delete">Delete</button>
      <p className="">Total</p>

      </ul>
        </div> 
       
    </div>

  );
}

export default Check;