import db from '../../config/firebase-config.js'

const insertClue = async(req, res) => {
    try {
        const clueRef = db.collection('clues').doc(req.body.level)
        const clue = await clueRef.get()
        let clues
        if (clue.exists) {
            clues = clue.data().clues
        }else{
            clues = []
        }
        clues.push(req.body.clue)
        const data = {
            clues
        }

        await clueRef.set(data)

        return res.status(200).json({success: 1, message: 'Clue inserted'})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default insertClue