import db from '../../config/firebase-config.js'

const insertCoupon = async(req, res) => {
    try {
        const couponRef = db.collection('coupons').doc('coupons')
        const coupon = await couponRef.get()
        let coupons
        if (coupon.exists) {
            coupons = coupon.data().coupons
        }
        else{
            coupons = []
        }
        coupons.push(req.body.coupon)
        const data = {
            coupons
        }

        await couponRef.set(data)
        
        return res.status(200).json({success: 1, message: 'Coupon inserted'})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default insertCoupon