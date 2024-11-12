/**
 * Handler of routes related to subject
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import jwtoken from '../services/jwt.service.js';
import { Router } from 'express';
const router = Router();

import { get, getById, insert, update, eliminate } from '../controllers/subject.controller.js';

router.get('/', jwtoken.ensureToken, get);
router.get('/:id', jwtoken.ensureToken, getById);
router.post('/', jwtoken.ensureToken, insert);
router.put('/:id', jwtoken.ensureToken, update);
router.delete('/:id', jwtoken.ensureToken, eliminate);

export default router;

