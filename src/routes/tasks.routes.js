import { Router } from 'express';
import { createTask, aiTaskBreakdown, getTasks } from '../controllers/tasks.controller.js';

const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.post('/ai-breakdown', aiTaskBreakdown);

export default router;