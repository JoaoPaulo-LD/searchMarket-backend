import { Request, Response } from 'express'
const knex = require('../database/connection')

class UsersController {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      password
    } = req.body

    const data = { name, email, password }

    await knex('users').insert(data)

    return res.json({ data })
  }

  async index(req: Request, res: Response) {
    await knex('users').select('*')
  }
}

export default UsersController