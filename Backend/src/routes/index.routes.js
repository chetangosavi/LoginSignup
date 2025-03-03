import express from 'express'
const router = express.Router();

//imports for routes
import authRouter from './auth.routes.js'

router.use('/auth',authRouter)

export default router;