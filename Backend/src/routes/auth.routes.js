import express from 'express'
const router = express.Router();

//Imports for routes
import {login,signup,me} from '../controllers/auth.controller.js'
import { authMiddleware } from '../middlewares/auth.Middleware.js';

router.post('/login',login)
router.post('/signup',signup)
router.get('/me',authMiddleware,me)

export default router;