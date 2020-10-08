import APi from './apis';
import { nonNullnonEmpty } from '../shareds';
import AsyncStorage from '@react-native-community/async-storage';
import Teacher from '../models/Teacher';

const FAVORITES_TEACHERS_KEY = "FAVORITES_TEACHERS";

export async function loadClasses (filters:any){
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
        // console.log("AAAAAAAAAA", finalURL);
        const response = await APi.get(finalURL);
        console.log("REs", response.data);
        return response.data;
    } catch (ex) {
        console.error('Error to load data from /classes', ex);
    }
};


export async function loadFavoritesTeachers (){
    const data = await AsyncStorage.getItem(FAVORITES_TEACHERS_KEY);
    if (data) {
        const arrTeachers: Teacher[] = JSON.parse(data);
        return arrTeachers;
    }
    return [];
};

export async function getFavoritesTeacherById() {
    const arrTeachersFavorite = await loadFavoritesTeachers();
    if (arrTeachersFavorite && arrTeachersFavorite.length > 0) {
        return arrTeachersFavorite.map(element => element.id)
    }
};

export async function toggleFavoritesTeachers (teacher:Teacher, willSave:boolean = false){
    const arrTeachersFavorite = await loadFavoritesTeachers();
    if (willSave) {
        arrTeachersFavorite.push(teacher);
    } else {
        if (arrTeachersFavorite && arrTeachersFavorite.length > 0) {
            const currentIndex = arrTeachersFavorite.findIndex( element => element.id === teacher.id );
            arrTeachersFavorite.splice(currentIndex, 1);
        }
    }
    await AsyncStorage.setItem(FAVORITES_TEACHERS_KEY, JSON.stringify(arrTeachersFavorite));
};
