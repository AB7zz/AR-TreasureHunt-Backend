import clueRoutes from './clue.js'
import couponRoutes from './coupon.js'
import levelRoutes from './level.js'
import questionRoutes from './question.js'
import userRoutes from './user.js'
import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Belcanto user server')
})

export default [clueRoutes, couponRoutes, levelRoutes, questionRoutes, userRoutes]