import ClassSchedule from "./ClassesSchedule";

export default interface Teacher {
    id?:number;
    name:string;
    avatar:string;
    phone:string;
    bio:string;
    subject:string;
    price:number;
    schedule:ClassSchedule[];
};