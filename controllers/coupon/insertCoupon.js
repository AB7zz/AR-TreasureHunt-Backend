const insertCoupon = async(req, res) => {
    try {
        const couponRef = db.collection('coupons')
        couponRef.add(req.body)

        const coupons = await couponRef.get()
        const result = []
        coupons.forEach(doc => {
            result.push(doc.data())
        })
        return res.status(200).json({success: 1, message: 'Coupon inserted', result})
    } catch (error) {
        console.log(error)
        return res.json({success: 0, message: 'Some error occurred'})
    }
}

export default insertCoupon