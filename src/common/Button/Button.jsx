import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="button">
            {props.title}
        </button>
    )
}

export default Button;