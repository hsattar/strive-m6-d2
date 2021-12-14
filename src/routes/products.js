import { Router } from 'express'
import db from '../functions/db/connection.js'

const productsRouter = Router()

productsRouter.route('/')
.get(async (req, res, next) => {
    try {
        res.send('ok')      
    } catch (error) {
        console.log(error)
    }
})
.post(async (req, res, next) => {
    try {
        const { prod_name, prod_description, prod_brand, prod_image, price, prod_category } = req.body
        const result = await db.query(
            "INSERT INTO product (prod_name, prod_description, prod_brand, prod_image, price, prod_category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [prod_name, prod_description, prod_brand, prod_image, price, prod_category]
            )
        res.status(201).send(result.rows[0])      
    } catch (error) {
        console.log({error})
    }
})

productsRouter.route('/:productId')
.get(async (req, res, next) => {
    try {
        res.send('ok')      
    } catch (error) {
        console.log(error)
    }
})
.put(async (req, res, next) => {
    try {
        res.send('ok')      
    } catch (error) {
        console.log(error)
    }
})
.delete(async (req, res, next) => {
    try {
        res.send('ok')      
    } catch (error) {
        console.log(error)
    }
})

export default productsRouter