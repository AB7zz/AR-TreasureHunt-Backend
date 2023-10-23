const insertQuestion = async(req, res) => {
    try {
        const questionRef = db.collection('questions')
        questionRef.add(req.body)

        const questions = await questionRef.get()
        const result = []
        questions.forEach(doc => {
            result.push(doc.data())
        })
        return res.status(200).json({success: 1, message: 'Question inserted', result})
    } catch (error) {
        console.log(error)
        return res.json({success: 0, message: 'Some error occurred'})
    }
}

export default insertQuestion