require('dotenv/config')
import express, { response } from 'express'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333)

export default app