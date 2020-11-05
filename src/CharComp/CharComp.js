import React from 'react';
import  './CharComp.css';
const charComp = (props) => {
    return <span
        className = "CharComp"
        onClick= {props.myClicked}>
        {props.char}
        </span>

//        return (
//        <div className="CharComp">
//        {locArr.map((el) => {return <span>{el}</span> })}
//      </div>
//    )
}

export default charComp;