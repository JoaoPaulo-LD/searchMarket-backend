import request from 'supertest'
import server from '../../src/server'
import knex from '../../src/database/connection'

describe('Register a new user', () => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
  })

  afterAll(() => {
    return knex.destroy()
  })

  it('should be able to create a new user', async () => {
    const response = await request(server)
      .post('/users')
      .send({
        name: "João Paulo Alencar",
        email: "jpjoao@gmail.com",
        password: "123456789",
        city: "Santarém",
        uf: "PA"
      })

    expect(response.body).toHaveProperty('name')
    expect(response.body).toHaveProperty('email')
    expect(response.body).toHaveProperty('city')
    expect(response.body).toHaveProperty('uf')
  })
})
