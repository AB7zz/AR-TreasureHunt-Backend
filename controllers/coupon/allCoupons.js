const allCoupons = async(req, res) => {
    try {
        const couponsRef = db.collection('coupons')
        const coupons = await couponsRef.get()
        if (coupons.empty) {
            return res.status(404).json({success: 0, message: 'No coupons found'})
        }
        const result = []
        coupons.forEach(doc => {
            result.push(doc.data())
        })
        return res.status(200).json({success: 1, result})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default allCoupons