import express from 'express'

const routes = express.Router()

routes.post('/', (req, res) => {
  return res.json({ Message: 'Hello World' })
})

export default routes
