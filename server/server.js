import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

// initializing express instance
const app = express()
dotenv.config()

// db
import connectDB from './db/connect.js'

// routers
import inventoryRouter from './routes/inventoryRouter.js'

//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

// req.body json parsing middleware
app.use(express.json())

app.use(cors())

//routes
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
