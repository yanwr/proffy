export const nonNullnonEmpty = (data:any) => {
    if(data !== null && data !== "" && data !== '' && data !== undefined){
        return true;
    }
    return false;
};