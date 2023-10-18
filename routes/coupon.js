import express from 'express';
import allCoupons from '../controllers/coupon/allCoupons.js'
import deleteCoupon from '../controllers/coupon/deleteCoupon.js'

const router = express.Router()

router.get('/coupon', allCoupons)
router.delete('/coupon/:cid', deleteCoupon)

export default router