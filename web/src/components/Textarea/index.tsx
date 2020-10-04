import React from "react";
import './styles.css';

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    id: string;
};

const TextareaComponent:React.FC<Props> = ({ id, label, ...rest } ) => {
    return (
        <div className="textarea-container">
            <label htmlFor={id}>{label}</label>
            <textarea id={id} {...rest} />
        </div>
    );
};

export default TextareaComponent;