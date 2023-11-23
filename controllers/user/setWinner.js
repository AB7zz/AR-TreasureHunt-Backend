import db from '../../config/firebase-config.js'

const setWinner = async(req, res) => {
    try {
        const userRef = db.collection('users').doc(req.headers.authorization)
        const userGet = await userRef.get()
        if (!userGet.exists) {
            return res.status(404).json({success: 0, message: 'User not found'})
        }
        await userRef.update({winner: true})
        return res.status(200).json({success: 1, message: 'Winner set'})
    } catch (error) {
        console.log(error)
    }
}


export default setWinner