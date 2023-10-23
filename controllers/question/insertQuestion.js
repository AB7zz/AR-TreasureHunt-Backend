import db from '../../config/firebase-config.js'

const insertQuestion = async(req, res) => {
    try {
        const questionRef = db.collection('questions')
        if(req.body.q === undefined || req.body.q === '' || req.body.a === undefined || req.body.a === '' || req.body.b === undefined || req.body.b === '' || req.body.c === undefined || req.body.c === '' || req.body.d === undefined || req.body.d === '' || req.body.ans === undefined || req.body.ans === '') {
            return res.status(404).json({success: 0, message: 'Insert question in correct format'})
        }
        questionRef.add(req.body)

        return res.status(200).json({success: 1, message: 'Question inserted'})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default insertQuestion