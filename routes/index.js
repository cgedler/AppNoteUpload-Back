/**
 * Main handler of all app routes 
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import { Router } from 'express';
import auth from './auth.routes.js';
import user from './user.routes.js';
import evaluation from './evaluation.routes.js';
import section from './section.routes.js';
import student from './student.routes.js';
import subject from './subject.routes.js';
import teacher from './teacher.routes.js';

const router = Router();

router.use('/auth', auth);
router.use('/user', user);
router.use('/evaluation', evaluation);
router.use('/section', section);
router.use('/student', student);
router.use('/subject', subject);
router.use('/teacher', teacher);

export default router;


