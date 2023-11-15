import db from '../../config/firebase-config.js'

const insertUser = async(req, res) => {
    try {
        const uid = req.headers.uid
        const userRef = db.collection('users').doc(uid)
        const user = await userRef.get()
        if (user.exists) {
            return res.status(200).json({success: 1, message: 'User logged in'})
        }else{
            return res.status(404).json({success: 1, message: 'User not found!'})
        }
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default insertUser