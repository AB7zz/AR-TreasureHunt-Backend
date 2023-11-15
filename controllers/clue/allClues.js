import db from '../../config/firebase-config.js'

const allClues = async(req, res) => {
    try {
        const cluesRef = db.collection('clues')
        const clues = await cluesRef.get()
        if (clues.empty) {
            return res.status(404).json({success: 0, message: 'No clues found'})
        }
        const result = []
        clues.forEach(doc => {
            result.push(doc.data())
        })
        return res.status(200).json({success: 1, result})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default allClues