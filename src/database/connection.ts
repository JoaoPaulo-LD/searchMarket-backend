import knexfile from '../../knexfile'
const knex = require('knex')(process.env.NODE_ENV === 'test' ? knexfile.test : knexfile.development)

module.exports = knex