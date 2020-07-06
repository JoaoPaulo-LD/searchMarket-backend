import { Request, Response } from 'express'
const knex = require('../database/connection')

class UsersController {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password,
      city,
      uf
    } = req.body

    const data = { name, email, password, city, uf }

    await knex('users').insert(data)

    return res.json({ name, email, city, uf })
  }

  async index(req: Request, res: Response) {
    await knex('users').select('*')
  }
}

export default UsersController