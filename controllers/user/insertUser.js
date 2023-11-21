import db from '../../config/firebase-config.js'

const insertUser = async(req, res) => {
    try {
        const uid = req.headers.authorization
        const userRef = db.collection('users').doc(uid)
        const user = await userRef.get()
        if (user.exists) {
            return res.status(404).json({success: 0, message: 'User already exists'})
        }
        const data = {
            id: uid,
            name: req.body.teamLeaderName,
            email: req.body.teamLeaderEmail,
            teamName: req.body.teamName,
            level: 0,
            coupons: [],
            timestamps: []
        }
        
        await userRef.set(data)
        
        return res.status(200).json({success: 1, message: 'User inserted'})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default insertUser