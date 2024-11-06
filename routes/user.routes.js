

import { Router } from 'express';
const router = Router();

import { get, getById, insert, update, eliminate } from '../controllers/user.controller.js';

router.get('/', get);
router.get('/:id', getById);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', eliminate);

export default router;