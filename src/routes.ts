import express from 'express'

import UsersController from './controllers/UsersController'
const usersController = new UsersController()

const routes = express.Router()

routes.post('/users', usersController.create) // <== To create a new user
routes.get('/users', usersController.index) // <== To list all users

export default routes
