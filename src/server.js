import express from 'express'
import cors from 'cors'
import productsRouter from './routes/products.js'
import { testDbConnection } from './functions/db/connection.js'

const server = express()
const port = process.env.PORT

server.use(express.json())
server.use(cors())

server.use('/products', productsRouter)

server.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
    testDbConnection()
})