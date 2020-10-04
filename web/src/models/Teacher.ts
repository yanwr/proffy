export default interface Teacher {
    avatar:string;
    bio:string;
    id?:number;
    name:string;
    phone:string;
    price:number;
    subject:string;
    schedule?: { weekDay: number, startTime:string, endTime: string}[];
    user_id?:number;
};