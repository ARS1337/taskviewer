import React from 'react';

function InputComponent(props) {
    const { label } = props
    let width = ""
    if (props.fullWidth) {
        width = "w-full"
    }
    return (
        <div className={`flex items-start justify-start flex-col m-2 mx-4  ${width}`}>
            {props.children}
            <div className={`flex items-stretch justify-between w-full font-medium ${width}`}>
                <div>{props.label}</div>
                <div>{props?.counter ? props.counter : ""}</div>
            </div>

        </div>
    );
}

export default InputComponent;