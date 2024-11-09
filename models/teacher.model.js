/**
 * Teacher model class
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Evaluation from './evaluation.model.js';

const Sex = {
    F: "FEMALE",
    M: "MALE"
};

const Teacher = db.define('app.teacher', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.ENUM(Sex.F, Sex.M)
    },
    birthdate: {
        type: DataTypes.DATE
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
});

Teacher.hasMany(Evaluation, {
    foreingKey: 'TeacherId',
    sourceKey: 'id'
});

Evaluation.belongsTo(Teacher, {
    foreingKey: 'TeacherId',
    targetId: 'id'
});

export default Teacher;


