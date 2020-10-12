import ClassSchedule from "./ClassesSchedule";

export default interface Class {
    id?:number;
    user_id:number;
    subject:string;
    price:number;
    schedule:ClassSchedule[];
};