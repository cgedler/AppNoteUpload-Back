
import express from 'express';

//import { dirname, join } from 'path';
//import { fileURLToPath } from 'url';
//const __dirname = dirname(fileURLToPath(import.meta.url));
//join(__dirname, 'src/views')

import logger from './middleware/logger.js'
import config from './config/environment.js';
import db from './config/database.js';
import routes from './routes/index.js';

import User from './models/user.model.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use('/', routes);


async function main() {
    try {
        await db.sync();
        app.listen(port);
        logger.info(`Servidor ejecutándose en http://localhost:${port}`);
        //logger.error(`Probando mensaje de error`);
        //console.log('Server is listening on port', 3000);

    } catch (error) {
        logger.error(`Unable to connect to the database: ${error}`);
    }
}
main();