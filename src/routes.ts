import express from 'express'

import UsersController from './controllers/UsersController'
const usersController = new UsersController()

const routes = express.Router()

routes.post('/', usersController.create) // <== To create a new user

export default routes
