import React from "react";

const Input = props => {
    return (
        <div>
            <label>
                <input
                    type="text"
                    id = {props.id}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </label>
        </div>
    );
};

export default Input;