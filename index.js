

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

//import { dirname, join } from 'path';
//import { fileURLToPath } from 'url';
//const __dirname = dirname(fileURLToPath(import.meta.url));
//join(__dirname, 'src/views')

import logger from './middleware/logger.js'
import config from './config/environment.js';
import db from './config/database.js';
import routes from './routes/index.js';

import User from './models/user.model.js';

import { login } from './controllers/login.controller.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());
//app.use(
//  bodyParser.urlencoded({
//    extended: true,
//  }),
//);
app.use('/', routes);

app.post('/auth/login',

//(req, res) => {
//  logger.info(`datos ${req.body}`);
//  res.send(req.body); //para ver los datos
//});

login);

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