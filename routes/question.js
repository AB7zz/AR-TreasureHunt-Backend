import express from 'express';
import allQuestions from '../controllers/question/allQuestions.js'

const router = express.Router()

router.get('/question', allQuestions)

export default router