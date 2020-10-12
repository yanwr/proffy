import bcrypt from 'bcrypt';
export default interface User {
    id?:number;
    name:string;
    email:string;
    password:string;
    avatar:string;
    phone:string;
    bio:string;
    createdAt?:Date;
};

export async function generatePasswordHash(password:any) {
    try {
        return bcrypt.hashSync(password, 12);
    } catch (ex) {
        console.error(ex);
        throw new Error('Fail to format hashPassword');
    }
};

export async function comparePasswords(currentPassword:any, passwordHash:any) {
    try {
        const passwordIsValid = bcrypt.compareSync(currentPassword, passwordHash);
        if (!passwordIsValid) {
            throw Error('Invalid password');
        }
        return passwordIsValid;
    } catch (ex) {
        console.error(ex);
        throw new Error(ex);
    }
}