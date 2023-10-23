import db from '../../config/firebase-config.js'

const allQuestions = async(req, res) => {
    try {
        const questionRef = db.collection('questions')
        const questions = await questionRef.get()
        if (questions.empty) {
            return res.status(404).json({success: 0, message: 'No questions found'})
        }
        const result = []
        questions.forEach(doc => {
            result.push(doc.data())
        })
        return res.status(200).json({success: 1, result})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default allQuestions