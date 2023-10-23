import db from '../../config/firebase-config.js'

const allCoupons = async(req, res) => {
    try {
        const couponsRef = db.collection('coupons').doc('coupons')
        const couponsGet = await couponsRef.get()
        if (!couponsGet.exists) {
            return res.status(404).json({success: 0, message: 'No coupons found'})
        }
        const result = couponsGet.data().coupons
        return res.status(200).json({success: 1, result})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default allCoupons