import Knex from 'knex';
import { USERS } from './00_USER';

//#region TABLES NAMES
    export const CLASSES = {
        table: "classes",
        column: {
            id: "classes.id",
            subject: "classes.subject",
            price: "classes.price",
            user_id: "classes.user_id"
        },
        select: {
            all: "classes.*"
        }
    };
//#endregion

export async function up(config:Knex) {
    return config.schema.createTable(CLASSES.table, table => {
        table.increments('id').primary();
        table.integer('user_id').notNullable()
            .references('id').inTable(USERS.table)
            .onUpdate('CASCADE').onDelete('CASCADE');
        table.string('subject').notNullable();
        table.decimal('price').notNullable();
    });
};

export async function down(config:Knex) {
    return config.schema.dropTable(CLASSES.table);
};