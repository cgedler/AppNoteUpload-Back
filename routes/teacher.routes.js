

import { Router } from 'express';
const router = Router();

import { get, getById, insert, update, eliminate } from '../controllers/teacher.controller.js';

router.get('/', get);
router.get('/', getById);
router.post('/', insert);
router.put('/', update);
router.delete('/', eliminate);

export default router;
