import express from 'express'
import cors from 'cors'
import productsRouter from './routes/products.js'
import reviewsRouter from './routes/reviews.js'
import { testDbConnection } from './functions/db/connection.js'

const server = express()
const port = process.env.PORT || 3001

server.use(express.json())
server.use(cors())

server.use('/products', productsRouter)
server.use('/reviews', reviewsRouter)

server.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
    testDbConnection()
})