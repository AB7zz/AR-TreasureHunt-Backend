import admin from '../config/firebase-config.js'
import dotenv from 'dotenv'

dotenv.config()

class Middleware {
	async decodeToken(req, res, next) {
		const token = req.headers.authorization;
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue || token == process.env.KEY) {
				return next();
			}
			return res.json({ message: 'Unauthorized', expired: true });
		} catch (e) {
			if(token == process.env.KEY) {
				return next();
			}
			return res.json({ message: 'Internal Error', expired: true });
		}
	}

	async phoneNumber(req, res) {
		const token = req.headers.authorization;
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			if (decodeValue) {
				return decodeValue.phone_number;
			}
			return res.json({ message: "Phone number not available" });
		} catch (e) {
			return res.json({ message: "Internal error in phone number" });
		}
	}
}

export default new Middleware()