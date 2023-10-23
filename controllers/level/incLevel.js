import db from '../../config/firebase-config.js'

const incLevel = async(req, res) => {
    try {
        const uid = req.headers.authorization
        const userRef = db.collection('users').doc(uid)
        const user = await userRef.get()
        if (!user.exists) {
            return res.status(404).json({success: 0, message: 'User not found'})
        }
        const data = {
            level: user.data().level + 1
        }
        const result = await userRef.update(data)
        return res.status(200).json({success: 1, message: 'Level incremented'})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default incLevel