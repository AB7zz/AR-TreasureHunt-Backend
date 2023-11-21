import db from '../../config/firebase-config.js'

const userDetails = async(req, res) => {
    try {
        const userRef = db.collection('users').doc(req.params.uid)
        const user = await userRef.get()
        if (!user.exists) {
            return res.status(404).json({success: 0, message: 'User not found'})
        }
        const result = user.data()
        return res.status(200).json({success: 1, result})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default userDetails