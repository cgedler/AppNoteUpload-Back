/**
 * Handler of routes related to user
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import Jwt from 'jsonwebtoken';
const jwt = Jwt;

import logger from '../middleware/logger.js';
import jwtoken from '../services/jwt.service.js';
import { Router } from 'express';
const router = Router();

import { get, getById, insert, update, eliminate } from '../controllers/user.controller.js';

router.get('/', jwtoken.verifyToken, get);
router.get('/:id', jwtoken.ensureToken, getById);
router.post('/', insert);
router.put('/:id', update);
router.delete('/:id', jwtoken.ensureToken, eliminate);

export default router;