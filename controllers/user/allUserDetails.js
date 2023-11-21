import db from '../../config/firebase-config.js'

const allUserDetails = async(req, res) => {
    try {
        const usersRef = db.collection('users')
        const users = await usersRef.get()
        if (users.empty) {
            return res.status(404).json({success: 0, message: 'No users found'})
        }
        const result = []
        users.forEach(doc => {
            result.push(doc.data())
        })
        return res.status(200).json({success: 1, result})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default allUserDetails