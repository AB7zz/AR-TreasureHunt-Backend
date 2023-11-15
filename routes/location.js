import express from 'express';
import fetchLocation from '../controllers/location/fetchLocation.js'

const router = express.Router()

router.get('/location', fetchLocation)

export default router