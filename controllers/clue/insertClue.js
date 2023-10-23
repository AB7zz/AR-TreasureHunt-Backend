const insertClue = async(req, res) => {
    try {
        const clueRef = db.collection('clues')
        clueRef.add(req.body)

        const clues = await clueRef.get()
        const result = []
        clues.forEach(doc => {
            result.push(doc.data())
        })
        return res.status(200).json({success: 1, message: 'Clue inserted', result})
    } catch (error) {
        console.log(error)
        return res.json({success: 0, message: 'Some error occurred'})
    }
}

export default insertClue