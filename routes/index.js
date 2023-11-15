import clueRoutes from './clue.js'
import couponRoutes from './coupon.js'
import levelRoutes from './level.js'
import questionRoutes from './question.js'
import userRoutes from './user.js'
import locRoutes from './location.js'
import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
    res.send('Belcanto user server')
})

export default [locRoutes, clueRoutes, couponRoutes, levelRoutes, questionRoutes, userRoutes]