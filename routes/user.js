import express from 'express';
import userDetails from '../controllers/user/userDetails.js'

const router = express.Router()

router.get('/user', userDetails)

export default router