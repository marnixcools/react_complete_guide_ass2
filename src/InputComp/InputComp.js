import React from 'react';

const InputComp = (props) => {
    return (
        <div>
            <input 
               type = "text"
               value = {props.str}
               onChange= {props.inputChanged}/>
            <p>Lengte is : {props.str.length}</p>
        </div>
    )
}

export default InputComp;