import { Request, Response } from 'express'
import knex from '../database/connection'

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
    const user_email = req.headers.email

    const user = await knex('users')
      .where('email', user_email)
      .select('*')

    return res.json(user)
  }
}

export default UsersController