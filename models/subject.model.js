

import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Evaluation from './evaluation.model.js';


const Subject = db.define('app.subjects', {
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

Subject.hasMany(Evaluation, {
    foreingKey: 'SubjectId',
    sourceKey: 'id'
});

Evaluation.belongsTo(Subject, {
    foreingKey: 'SubjectId',
    targetId: 'id'
});

export default Subject;