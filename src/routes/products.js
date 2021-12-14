import { Router } from 'express'
import db from '../functions/db/connection.js'

const productsRouter = Router()

productsRouter.route('/')
.get(async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM product')
        res.send(result.rows)      
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
        const result = await db.query('SELECT * FROM product WHERE prod_id = $1', [req.params.productId])
        if (result.rows[0]) return res.send(result.rows[0])      
        res.status(404).send('A Product with that Id doesn\'t exist')
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