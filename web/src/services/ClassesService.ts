import APi from './apis';
import Teacher from '../models/Teacher';
import { nonNullnonEmpty } from '../utils/HelpFunction';

export const createTeacher = async (teacher:Teacher) => {
    try {
        await APi.post('/classes/teachers', teacher);
        alert("Teacher created with success!");
    } catch (ex) {
        console.error('Error to load data from /classes/teachers', ex);
    }
};

export const loadClasses = async (filters:any) => {
    try {
        let finalURL = "/classes";
        if(nonNullnonEmpty(filters)){
            finalURL += "?";
            for(const key in filters){
                if(nonNullnonEmpty(filters[key])){
                    finalURL += key + "=" + filters[key] + "&";
                }
            };
            const index = finalURL.lastIndexOf("&");
            finalURL = finalURL.substring(0, index);
        }
        console.log("AAAAAAAAAA", finalURL);
        const response = await APi.get(finalURL);
        console.log("REs", response.data);
        return response.data;
    } catch (ex) {
        console.error('Error to load data from /classes', ex);
    }
};