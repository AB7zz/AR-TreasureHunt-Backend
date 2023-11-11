import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/index.js';
import Middleware from './middleware/index.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors({origin: '*',credentials: true}))
app.options('*', cors())
app.get('/', (req, res) => {
    res.send('AR-Backend server')
})
// app.use(Middleware.decodeToken)   
app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use('/api/v1', routes)

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))