import express from 'express';
import incLevel from '../controllers/level/incLevel.js'

const router = express.Router()

router.post('/level/:uid', incLevel)

export default router