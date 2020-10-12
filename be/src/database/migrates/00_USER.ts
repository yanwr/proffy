import Knex from 'knex';

//#region TABLES NAMES
    export const USERS = {
        table: "user",
        column: {
            id: "user.id",
            email: 'user.email',
            password: 'user.password',
            name: "user.name",
            avatar: "user.avatar",
            phone: "user.phone",
            bio: "user.bio",
            createdAt: 'user.createdAt'
        },
        select:{
            all: "user.*"
        }
    };
//#endregion

export async function up(config:Knex) {
    return config.schema.createTable(USERS.table, table => {
        table.increments('id').primary();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('phone').notNullable();
        table.string('bio').notNullable();
        table.timestamp('createdAt').defaultTo(config.fn.now())
    });
};

export async function down(config:Knex) {
    return config.schema.dropTable(USERS.table);
};