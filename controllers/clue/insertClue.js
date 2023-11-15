import db from '../../config/firebase-config.js'

const insertClue = async(req, res) => {
    try {
        const clueRef = db.collection('clues').doc(req.body.level)
        
        const data = {
            clue: req.body.clue,
            hint: req.body.hint
        }

        await clueRef.set(data)

        return res.status(200).json({success: 1, message: 'Clue inserted'})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default insertClue