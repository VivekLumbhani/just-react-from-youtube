import React, { useState } from "react";
import './style.css'

const UseState=()=>{
    const [mynum,changeNum]=useState(2)
    return (
        <>
            <div className="center_div">
                <p>{mynum}</p>
                <div className="button2" onClick={()=>{
                    changeNum(mynum+1)
                }}>
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increment
                </div>
                <div className="button2"onClick={()=>{
                   mynum<=0?console.log("cant derece"):changeNum(mynum-1);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Decrement
                </div>
            </div>
        </>
    )
}

export default UseState