import db from '../../config/firebase-config.js'

const deleteCoupon = async(req, res) => {
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

        const index = coupons.indexOf(req.params.coupon);
        if(index == -1){
            return res.json({success: -1, message: 'Coupon not found'})
        }
        if (index !== -1) {
            coupons.splice(index, 1);
        }
        await couponRef.set({coupons})
        return res.status(200).json({success: 1, message: 'Coupon deleted'})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default deleteCoupon