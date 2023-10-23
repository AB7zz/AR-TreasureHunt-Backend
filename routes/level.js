import express from 'express';
import incLevel from '../controllers/level/incLevel.js'

const router = express.Router()

router.post('/level', incLevel)

export default router