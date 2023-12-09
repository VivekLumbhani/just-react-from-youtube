import React, { useReducer, useState } from "react";

const reducerfun=(state,action)=>{
    if(action.type==="incr"){
        state=state+1
    }
    if(action.type==="dec"){

        state<=0?state=0:state=state-1
    }
    return state
}


const UseReducer=()=>{
    const [state,dispatch]=useReducer(reducerfun,2);
    // const [mynum,changeNum]=useState(2)
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={()=>{
                    dispatch({type:"incr"})
                }}>
                    
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Increment
                </div>
                <div className="button2"onClick={()=>{
                    dispatch({type:"dec"})
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


export default UseReducer