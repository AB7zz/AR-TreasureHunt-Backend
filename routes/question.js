import express from 'express';
import allQuestions from '../controllers/question/allQuestions.js'
import insertQuestion from '../controllers/question/insertQuestion.js'


const router = express.Router()

router.get('/question', allQuestions)
router.post('/question', insertQuestion)

export default router