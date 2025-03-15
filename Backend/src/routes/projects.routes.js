import express from 'express'
import { createProject, deleteProject, getProject } from '../controllers/project.controller.js';

const router = express.Router();

router.post('/create',createProject);
router.get('/get',getProject);
router.delete('/delete/:id', deleteProject);

export default router;