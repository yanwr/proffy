import React from 'react';
import NavHeaderComponent from '../../components/NavHeader';
import TeachersListComponent from '../../components/TeachersList';
import './styles.css';

export default function TeacherListPage() {
    return(
        <div id="teacher-list-container" className="container">
            <NavHeaderComponent title="These are the available teachers." >
                <form id="search-teachers-container">
                    <div className="input-container">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="week-day">Week Day</label>
                        <input type="text" id="week-day" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="time">Time</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </NavHeaderComponent>
            <main>
               <TeachersListComponent data={[{}]} />
            </main>
        </div>
    )
};