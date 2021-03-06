import { Router } from 'express'
import db from '../functions/db/connection.js'
import moment from 'moment'

const reviewsRouter = Router()

reviewsRouter.route('/')
.get(async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM review')
        res.send(result.rows)      
    } catch (error) {
        console.log(error)
    }
})
.post(async (req, res, next) => {
    try {
        const { comment, rating, prod_id } = req.body
        const result = await db.query(
            "INSERT INTO review (comment, rating, prod_id) VALUES ($1, $2, $3) RETURNING *",
            [comment, rating, prod_id]
            )
        res.status(201).send(result.rows[0])      
    } catch (error) {
        console.log({error})
    }
})

reviewsRouter.route('/:reviewId')
.get(async (req, res, next) => {
    try {
        const result = await db.query('SELECT * FROM review WHERE review_id = $1', [req.params.reviewId])
        if (result.rows[0]) return res.send(result.rows[0])      
        res.status(404).send('A review with that Id doesn\'t exist')
    } catch (error) {
        console.log(error)
    }
})
.put(async (req, res, next) => {
    try {
        const valuesInTheBody = Object.values(req.body);
        const numberOfValues = valuesInTheBody.length;
        const updateStatement = Object.entries(req.body).map(([key, value], i) => `${key}=$${i + 1}`).join(",")
        const query = `UPDATE review SET ${updateStatement}, updated_at='${moment().format("YYYY-MM-DD hh:mm:ss")}' 
                        WHERE review_id=$${numberOfValues + 1} RETURNING *`
        const result = await db.query(query, [...valuesInTheBody, req.params.reviewId])
        res.send(result.rows[0])
    } catch (error) {
        console.log(error)
    }
})
.delete(async (req, res, next) => {
    try {
        const result = await db.query('DELETE FROM review WHERE review_id = $1', [req.params.reviewId])
        res.status(204).send()      
    } catch (error) {
        console.log(error)
    }
})

export default reviewsRouter