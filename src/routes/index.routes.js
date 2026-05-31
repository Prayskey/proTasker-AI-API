import { Router } from 'express';
import { loadDefault } from '../controllers/index.controller.js';

const router = Router();

router.get('/', loadDefault);

export default router;