import React from "react";
import './styles.css';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    id: string;
    options: Array<{
        value: string | number;
        label: string;
    }>;
};

const SelectComponent:React.FC<Props> = ({ id, label, options, ...rest } ) => {
    return (
        <div className="select-container">
            <label htmlFor={id}>{label}</label>
            <select value="" id={id} {...rest} >
                <option value="" disabled hidden>Select an option ...</option>
                {
                    options.map( x => (
                        <option key={x.value} value={x.value}>{x.label}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default SelectComponent;