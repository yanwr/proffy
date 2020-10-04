import React, { useEffect, useState } from 'react';
import { loadClasses } from '../../services/ClassesService';
import NavHeaderComponent from '../../components/NavHeader';
import InputComponent from '../../components/Input';
import SelectComponent from '../../components/Select';
import TeachersListComponent from '../../components/TeachersList';
import './styles.css';

export default function TeacherListPage() {

    const [classes, setClasses] = useState<[] | any>([]);
    const [filters, setFilters] = useState<{ weekDay:string, subject: string, time:string } | any>(null);

    useEffect(() => {
        loadClasses(filters)
        .then(data => setClasses(data))
        .catch(() => setClasses(null))
    }, [filters]);

    return(
        <div id="teacher-list-container" className="container">
            <NavHeaderComponent title="These are the available teachers." >
                <form id="search-teachers-container">
                    <SelectComponent 
                        id="subject" 
                        label="Subject"
                        value={filters && filters.subject && filters.subject}
                        onChange={(e) => setFilters({...filters, subject: e.target.value})}
                        options={[
                            { value: "Docker", label: "Docker"},
                            { value: "DevOps", label: "DevOps"},
                            { value: "JAVA", label: "JAVA"},
                            { value: "Node.Js", label: "Node.Js"},
                            { value: "React.JS", label: "React.JS"},
                            { value: "React Native", label: "React Native"},
                            { value: "Spring Boot", label: "Spring Boot"},
                            { value: "C++", label: "C++"},
                        ]}
                    />
                    <SelectComponent 
                        id="week-day" 
                        label="Week Day"
                        value={filters && filters.weekDay && filters.weekDay}
                        onChange={(e) => setFilters({...filters, weekDay: e.target.value})}
                        options={[
                            { value: "1", label: "Sunday"},
                            { value: "2", label: "Monday"},
                            { value: "3", label: "Tuesday"},
                            { value: "4", label: "Wednesday"},
                            { value: "5", label: "Thursday"},
                            { value: "6", label: "Friday"},
                            { value: "7", label: "Saturday"},
                        ]}
                    />
                    <InputComponent 
                        type="time"
                        id="time"
                        label="Time"
                        value={filters && filters.time && filters.time}
                        onChange={(e) => setFilters({...filters, time: e.target.value + ":00"})}
                    />
                </form>
            </NavHeaderComponent>
            <main>
               <TeachersListComponent data={classes} />
            </main>
        </div>
    )
};