import Knex from 'knex';

//#region TABLES NAMES
    export const CONNECTION_USER = {
        table: "connection_user",
        column: {
            id: "connection_user.id",
            user_id: "connection_user.phone",
            createdAt: "connection_user.createdAt"
        },
        select:{
            all: "connection_user.*"
        }
    };
    import { USERS } from './00_USER';
//#endregion

export async function up(config:Knex) {
    return config.schema.createTable(CONNECTION_USER.table, table => {
        table.increments('id').primary();
        table.integer('user_id').notNullable()
            .references('id')
            .inTable(USERS.table)
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.timestamp('createdAt')
            .defaultTo(config.fn.now())
            .notNullable();
    });
};

export async function down(config:Knex) {
    return config.schema.dropTable(CONNECTION_USER.table);
};