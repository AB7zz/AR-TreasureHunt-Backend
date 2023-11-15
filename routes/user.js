import express from 'express';
import userDetails from '../controllers/user/userDetails.js'
import insertUser from '../controllers/user/insertUser.js'
import loginUser from '../controllers/user/loginUser.js'
const router = express.Router()

router.post('/user', insertUser)
router.post('/login', loginUser)
router.get('/user/:uid', userDetails)

export default router   