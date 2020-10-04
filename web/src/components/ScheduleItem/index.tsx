import React from "react";
import InputComponent from "../Input";
import SelectComponent from "../Select";
import './styles.css';

interface Props {
    element: { 
        index: number,
        weekDay: number, 
        startTime: string, 
        endTime: string 
    };
    updateValue: (index:number, filed: string, value: string) => void;
};

const ScheduleItemComponent: React.FC<Props> = ({element, updateValue}) => {
    return(
        <div className="schedule-item-container">
            <SelectComponent 
                id="weekDay" 
                label="Week Day"
                value={element.weekDay}
                onChange={(e) => updateValue(element.index, "weekDay", e.target.value)}
                options={[
                    { value: 1, label: "Sunday"},
                    { value: 2, label: "Monday"},
                    { value: 3, label: "Tuesday"},
                    { value: 4, label: "Wednesday"},
                    { value: 5, label: "Thursday"},
                    { value: 6, label: "Friday"},
                    { value: 7, label: "Saturday"},
                ]}
            />
            <InputComponent 
                type="time"
                id="startTime"
                label="From"
                value={element.startTime}
                onChange={(e) => updateValue(element.index, "startTime", e.target.value)}
            />
            <InputComponent 
                type="time"
                id="endTime"
                label="To"
                value={element.endTime}
                onChange={(e) => updateValue(element.index, "endTime", e.target.value)}
            />
        </div>
    );
};

export default ScheduleItemComponent;