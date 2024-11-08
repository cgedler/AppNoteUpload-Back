

import { DataTypes } from 'sequelize';
import db from '../config/database.js';


const Section = db.define('app.sections', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    journey: {
        type: DataTypes.INTEGER
    },
    quater: {
        type: DataTypes.INTEGER
    }
});

export default Section;