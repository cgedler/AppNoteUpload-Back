/**
 * Main App
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import express from 'express';
import cors from 'cors';

import logger from './middleware/logger.js'
import config from './config/environment.js';
import db from './config/database.js';
import routes from './routes/index.js';

//Models
import User from './models/user.model.js';
import Evaluation from './models/evaluation.model.js';
import Section from './models/section.model.js';
import Student from './models/student.model.js';
import Subject from './models/subject.model.js';
import Teacher from './models/teacher.model.js';
// Configuration
const app = express();
const port = 3000;
// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use('/', routes);

async function main() {
    try {
        await db.sync();  //{force:true}
        app.listen(port);
        logger.info(`Servidor ejecutándose en http://localhost:${port}`);
    } catch (error) {
        logger.error(`Unable to connect to the database: ${error}`);
    }
}
main();