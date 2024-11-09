/**
 * Connection class for SQLite
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import Sequelize from 'sequelize';
import config from './environment.js';

export const SQLite = new Sequelize({
    dialect: 'sqlite',
    storage: config.database.path
});