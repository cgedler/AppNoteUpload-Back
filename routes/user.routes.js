

import jwtoken from '../services/jwt.service.js';
import { Router } from 'express';
const router = Router();

import { get, getById, insert, update, eliminate } from '../controllers/user.controller.js';

router.get('/', jwtoken.ensureToken, (req, res) => { get; });
router.get('/:id', jwtoken.ensureToken, (req, res) => { getById; });
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', jwtoken.ensureToken, (req, res) => { eliminate; });

export default router;