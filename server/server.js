import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

// initializing express instance
const app = express()
dotenv.config()

// db
import connectDB from './db/connect.js'

// routers
import homeRouter from './routes/homeRouter.js'
import inventoryRouter from './routes/inventoryRouter.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import { fileURLToPath } from 'url'

// req.body json parsing middleware
app.use(express.json())

const filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filename)

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(cors())

//routes
app.get('/', (req, res) => {
  res.send('Hello-Motto')
})

app.use('/api/v1/home', homeRouter)
app.use('/api/v1/inventory', inventoryRouter)

// 404 response
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000

// listening for requests
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port: ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
