/*
 ** KNEXFILE
*/
import path from 'path';

module.exports = {
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, '..', 'database', 'db.sqlite') 
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'database', 'models')
    },
    useNullAsDefault: true
};