import knex from 'knex'
import knexfile from '../../knexfile'

const connection = knex(knexfile.test)

export default connection