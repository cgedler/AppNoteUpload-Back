/**
 * Handler of routes related to auth
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import { Router } from 'express';
const router = Router();

import { login } from '../controllers/login.controller.js';

router.post('/login', login);

export default router;