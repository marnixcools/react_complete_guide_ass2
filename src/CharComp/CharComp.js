import React from 'react';

const charComp = (props) => {
    return <span
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