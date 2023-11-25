import db from '../../config/firebase-config.js'

const deleteCoupon = async(req, res) => {
    try {
        const couponToBeDeleted = req.params.coupon

        // const userRef = db.collection('users').doc(req.headers.authorization)
        // const user = await userRef.get()

        const couponRef = db.collection('coupons').doc('coupons')
        const coupon = await couponRef.get()
        let coupons
        if (coupon.exists) {
            coupons = coupon.data().coupons
        }
        else{
            coupons = []
        }

        // if(user.exists){
        //     if(user.data().coupons){
        //         userCoupons = [...user.data().coupons, couponToBeDeleted]
        //     }else{
        //         userCoupons = [couponToBeDeleted]
        //     }
        // }

        const index = coupons.indexOf(couponToBeDeleted);
        if(index == -1){
            return res.json({success: -1, message: 'Coupon not found'})
        }
        if (index !== -1) {
            coupons.splice(index, 1);
        }
        await couponRef.set({coupons})
        // await userRef.update({coupons: userCoupons})
        return res.status(200).json({success: 1, message: 'Coupon deleted'})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default deleteCoupon