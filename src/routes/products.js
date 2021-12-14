import { Router } from 'express'

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
        res.send('ok')      
    } catch (error) {
        console.log(error)
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