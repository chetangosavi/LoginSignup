import express from 'express'
const router = express.Router();

//imports for routes
import authRouter from './auth.routes.js'
import projectRouter from './projects.routes.js'
import { authMiddleware, isAdmin } from '../middlewares/auth.Middleware.js';

router.use('/auth',authRouter)
router.use('/projects',authMiddleware,isAdmin,projectRouter)

export default router;