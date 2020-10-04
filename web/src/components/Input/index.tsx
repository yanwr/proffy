import React from "react";
import './styles.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
    id: string;
};

const InputComponent:React.FC<Props> = ({ id, label, ...rest } ) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
        </div>
    );
};

export default InputComponent;