import express from 'express';
import allCoupons from '../controllers/coupon/allCoupons.js'
import deleteCoupon from '../controllers/coupon/deleteCoupon.js'
import insertCoupon from '../controllers/coupon/insertCoupon.js'

const router = express.Router()

router.get('/coupon', allCoupons)
router.post('/coupon', insertCoupon)
router.delete('/coupon/:coupon', deleteCoupon)

export default router