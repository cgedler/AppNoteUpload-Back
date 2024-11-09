/**
 * Student model class
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Evaluation from './evaluation.model.js';
import Section from './section.model.js';

const Sex = {
    F: "FEMALE",
    M: "MALE"
};

const Student = db.define('app.student', {
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
    },
    license: {
        type: DataTypes.STRING
    }
});

Student.hasMany(Evaluation, {
    foreingKey: 'StudentId',
    sourceKey: 'id'
});

Evaluation.belongsTo(Student, {
    foreingKey: 'StudentId',
    targetId: 'id'
});

Student.hasOne(Section, {
    foreingKey: 'StudentId',
    sourceKey: 'id'
});

Section.belongsTo(Student, {
    foreingKey: 'StudentId',
    targetId: 'id'
});

export default Student;