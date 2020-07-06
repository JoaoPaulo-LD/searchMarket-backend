import path from 'path'

const knexfile = {
  development: {
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
  },
  test: {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'test_db.sqlite')
    },
    useNullAsDefault: true,
  }
}

export default knexfile