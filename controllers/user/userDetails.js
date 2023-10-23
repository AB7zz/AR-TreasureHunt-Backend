const userDetails = async(req, res) => {
    try {
        const userRef = db.collection('users').doc(req.params.uid)
        const user = await userRef.get()
        if (!user.exists) {
            return res.status(404).json('User not found')
        }
        const result = user.data()
        return res.status(200).json({success: 1, result})
    } catch (error) {
        
    }
}

export default userDetails