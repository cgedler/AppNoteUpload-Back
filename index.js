

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

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use('/', routes);

async function main() {
    try {
        await db.sync();  //{force:true}
        app.listen(port);
        logger.info(`Servidor ejecutándose en http://localhost:${port}`);
        //logger.error(`Probando mensaje de error`);
        //console.log('Server is listening on port', 3000);

    } catch (error) {
        logger.error(`Unable to connect to the database: ${error}`);
    }
}
main();