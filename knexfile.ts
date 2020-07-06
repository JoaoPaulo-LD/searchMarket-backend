module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    database: 'searchmarket_db',
    user: 'postgres',
    password: '123456789'
  },
  migrations: {
    tableName: "knex_migrations",
    directory: `${__dirname}/src/database/migrations`
  }
}