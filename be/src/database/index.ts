import knex from 'knex';
import path from 'path';

const repository = knex({
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, 'db.sqlite'),
    },
    useNullAsDefault: true
});

export default repository;