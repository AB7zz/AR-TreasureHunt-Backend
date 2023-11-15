import dotenv from 'dotenv'

dotenv.config()

const fetchLocation = async(req, res) => {
    try {
        const ONE_X_1 = process.env.ONE_X_1
        const ONE_X_2 = process.env.ONE_X_2
        const TWO_X_1 = process.env.TWO_X_1
        const TWO_X_2 = process.env.TWO_X_2
        const THREE_X_1 = process.env.THREE_X_1
        const THREE_X_2 = process.env.THREE_X_2
        const FOUR_X_1 = process.env.FOUR_X_1
        const FOUR_X_2 = process.env.FOUR_X_2
        const FIVE_X_1 = process.env.FIVE_X_1
        const FIVE_X_2 = process.env.FIVE_X_2

        const locations = [
            {
                level: '1',
                x1: ONE_X_1,
                x2: ONE_X_2
            },
            {
                level: '2',
                x1: TWO_X_1,
                x2: TWO_X_2
            },
            {
                level: '3',
                x1: THREE_X_1,
                x2: THREE_X_2
            },
            {
                level: '4',
                x1: FOUR_X_1,
                x2: FOUR_X_2
            },
            {
                level: '5',
                x1: FIVE_X_1,
                x2: FIVE_X_2
            }
        ]
        // console.log("dkjfkjbe")
        return res.status(200).json({locations})
    } catch (error) {
        console.log(error)
        return res.json({success: -1, message: 'Some error occurred'})
    }
}

export default fetchLocation