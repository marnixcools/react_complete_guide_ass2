import React from 'react';

const validationComp = (props) => {
    let result = null;

    if (props.inputTextLength < 5) {
        result = <p>Too short</p>
    } else {
        result = <p>Text long enough </p>
    }

    return (
        result
    )
}

export default validationComp;