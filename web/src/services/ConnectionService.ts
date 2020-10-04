import APi from './apis';

export const loadTotalConnections = async () => {
    try {
        const response = await APi.get('/connections');
        return response.data.total;
    } catch (ex) {
        console.error('Error to load data from /connections', ex);
    }
};

export const createConnection = async (user_id:any) => {
    try {
        await APi.post('/connections', { user_id  });
        alert('Connection done!');
    } catch (ex) {
        console.error('Error to create connection from /connections', ex);
    }
};