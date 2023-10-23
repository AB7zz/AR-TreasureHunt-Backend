import express from 'express';
import userDetails from '../controllers/user/userDetails.js'
import insertUser from '../controllers/user/insertUser.js'
const router = express.Router()

router.post('/user', insertUser)
router.get('/user/:uid', userDetails)

export default router