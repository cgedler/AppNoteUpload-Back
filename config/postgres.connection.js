/**
 * Connection class for Postgresql
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import Sequelize from 'sequelize';
import config from './environment.js';

export const Postgres = new Sequelize(config.database.name, config.database.username, config.database.password, {
    host: config.database.host,
    port: config.database.port,
    dialect: 'postgres',
    dialectOptions: {
        options: {
            encrypt: config.database.encrypt
        }
    }
});