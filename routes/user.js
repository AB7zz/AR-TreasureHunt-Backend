import express from 'express';
import userDetails from '../controllers/user/userDetails.js'
import allUserDetails from '../controllers/user/allUserDetails.js'
import insertUser from '../controllers/user/insertUser.js'
import loginUser from '../controllers/user/loginUser.js'
import setWinner from '../controllers/user/setWinner.js'
const router = express.Router()

router.post('/user', insertUser)
router.post('/login', loginUser)
router.get('/user/:uid', userDetails)
router.get('/user', allUserDetails)
router.post('/winner', setWinner)

export default router   