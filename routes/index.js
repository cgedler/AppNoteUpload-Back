

import { Router } from 'express';
import user from './user.routes.js';
import evaluation from './evaluation.routes.js';
import section from './section.routes.js';
import student from './student.routes.js';
import subject from './subject.routes.js';
import teacher from './teacher.routes.js';

const router = Router();

router.use('/user', user);
router.use('/evaluation', evaluation);
router.use('/section', section);
router.use('/student', student);
router.use('/subject', subject);
router.use('/teacher', teacher);

export default router;


