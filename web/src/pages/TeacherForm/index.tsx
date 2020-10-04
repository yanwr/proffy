import React, { ChangeEvent, FormEvent, useState } from 'react';
import { createTeacher } from '../../services/ClassesService';
import { useHistory } from 'react-router-dom';
import NavHeaderComponent from '../../components/NavHeader';
import TextareaComponent from '../../components/Textarea';
import SelectComponent from '../../components/Select';
import InputComponent from '../../components/Input';
import ScheduleItemComponent from '../../components/ScheduleItem';
import './styles.css';

import warningIcon from '../../assets/icons/warning.svg';

function useValueAndChange(initialValue:any) {
    const [value, setValue] = useState<any>(initialValue);
    function handleOnChange(e:ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        setValue(e.target.value);
    };
    return { value, onChange: handleOnChange};
};

export default function TeacherFormPage() {
    const navigation = useHistory();
    const [scheduleItens, setScheduleItens] = useState([{ weekDay: 0, startTime: "", endTime: ""}]);
    const name = useValueAndChange('');
    const avatar = useValueAndChange('');
    const whatsapp = useValueAndChange('');
    const bio = useValueAndChange('');
    const subject = useValueAndChange('');
    const price = useValueAndChange('');

    async function handleCreateTeacher(e:FormEvent) {
        e.preventDefault();
        await createTeacher({
            name: name.value,
            avatar: avatar.value,
            phone: whatsapp.value,
            bio: bio.value,
            subject: subject.value,
            price: +price.value,
            schedule: scheduleItens.map(x => ({...x, weekDay: +x.weekDay}))
        });
        navigation.push('/');
    };

    function addNewScheduleItem() {
        setScheduleItens([
            ...scheduleItens,
            { weekDay: 0, startTime: "", endTime: "" }
        ]);
    };

    function updateCurrentScheduleValue(currentIndex:number, field:string, value:string) {
        setScheduleItens(scheduleItens.map((element, index) => {
            if(currentIndex === index){
                return {...element, [field]: field === 'weekDay' ? value : value + ":00" };
            }
            return element;
        }));
    };

    function renderSchedulesItens() {
        return scheduleItens.map((element, index) => (
            <ScheduleItemComponent 
                key={index}
                element={{...element, index}}
                updateValue={updateCurrentScheduleValue}
            />
        ));
    };

    return(
        <div id="teacher-form-container" className="container">
            <NavHeaderComponent 
                title="How amazing you want to teach." 
                description="The first step is filling this inscription form"
            />
            <main>
                <form onSubmit={handleCreateTeacher}>
                    <fieldset>
                        <legend>Your datas</legend>
                        <InputComponent 
                            type="text" 
                            id="name" 
                            label="Complete Name" 
                            {...name}
                        />
                        <InputComponent 
                            type="text"
                            id="avatar"
                            label="Avatar"
                            {...avatar}
                        />
                        <InputComponent 
                            type="text"
                            id="whatsapp"
                            label="WhatsApp"
                            {...whatsapp}
                        />
                        <TextareaComponent 
                            id="bio"
                            label="Biografy"
                            {...bio}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>About classes</legend>
                        <SelectComponent 
                            id="subject" 
                            label="Subject"
                            options={[
                                { value: "Docker", label: "Docker"},
                                { value: "DevOps", label: "DevOps"},
                                { value: "JAVA", label: "JAVA"},
                                { value: "Node.Js", label: "Node.Js"},
                                { value: "React.JS", label: "React.JS"},
                                { value: "React Native", label: "React Native"},
                                { value: "Spring Boot", label: "Spring Boot"},
                                { value: "C#", label: "C#"},
                                { value: "C++", label: "C++"},
                            ]}
                            {...subject}
                        />
                        <InputComponent 
                            type="text"
                            id="price"
                            label="Price/Hour"
                            {...price}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Available Times
                            <button 
                                type="button"
                                onClick={addNewScheduleItem}
                            >
                                + New Time
                            </button>
                        </legend>
                        { renderSchedulesItens() }
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Warning"/>
                            Important! <br />
                            Fill every datas
                        </p>
                        <button type="submit">
                            Save
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
};