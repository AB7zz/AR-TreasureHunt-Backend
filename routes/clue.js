import express from 'express';
import allClues from '../controllers/clue/allClues.js'

const router = express.Router()

router.get('/clue', allClues)

export default router