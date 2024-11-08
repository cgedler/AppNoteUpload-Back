

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