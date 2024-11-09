/**
 * Section model class
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


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