import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('city').notNullable()
    table.string('uf').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users')
}