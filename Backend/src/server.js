import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDb } from './config/db.js'
connectDb();

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json())

//routes
import idxRoutes from './routes/index.routes.js'
app.use('/api',idxRoutes)


let PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

