

import jwtoken from '../services/jwt.service.js';
import { Router } from 'express';
const router = Router();

import { get, getById, insert, update, eliminate } from '../controllers/evaluation.controller.js';

router.get('/', jwtoken.ensureToken, (req, res) => { get; });
router.get('/', jwtoken.ensureToken, (req, res) => { getById; });
router.post('/', jwtoken.ensureToken, (req, res) => { insert; });
router.put('/', jwtoken.ensureToken, (req, res) => { update; });
router.delete('/', jwtoken.ensureToken, (req, res) => { eliminate; });

export default router;