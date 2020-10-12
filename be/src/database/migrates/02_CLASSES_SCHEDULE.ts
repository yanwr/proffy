import Knex from 'knex';

//#region TABLES NAMES
    export const CLASSES_SCHEDULE = {
        table: "classes_schedule",
        column: {
            id: "classes_schedule.id",
            classes_id: "classes_schedule.class_id",
            weekDay: "classes_schedule.weekDay",
            startTime: "classes_schedule.startTime",
            endTime: "classes_schedule.endTime",
        },
        select: {
            all: "classes_schedule.*"
        }
    };
    import { CLASSES } from './01_CLASSES';
//#endregion

export async function up(config:Knex) {
    return config.schema.createTable(CLASSES_SCHEDULE.table, table => {
        table.increments('id').primary();
        table.integer('classes_id')
            .notNullable()
            .references('id')
            .inTable(CLASSES.table)
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.integer('weekDay').notNullable();
        table.time('startTime').notNullable();
        table.time('endTime').notNullable();
    });
};

export async function down(config:Knex) {
    return config.schema.dropTable(CLASSES_SCHEDULE.table);
};