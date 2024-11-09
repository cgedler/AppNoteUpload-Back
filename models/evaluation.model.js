/**
 * Evaluation model class
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Evaluation = db.define('app.evaluations', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATE
    },
    note: {
        type: DataTypes.INTEGER,
    }
});

export default Evaluation;