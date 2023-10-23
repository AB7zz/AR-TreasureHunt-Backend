import express from 'express';
import allClues from '../controllers/clue/allClues.js'
import insertClue from '../controllers/clue/insertClue.js';

const router = express.Router()

router.get('/clue', allClues)
router.post('/clue', insertClue)

export default router