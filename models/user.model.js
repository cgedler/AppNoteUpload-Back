
import { DataTypes } from 'sequelize';
import db from '../config/database.js';
import Student from './student.model.js';
import Teacher from './teacher.model.js';

const Role = {
    ADMIN: "ADMIN",
    USER: "USER"
};

const User = db.define('system.users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM(Role.ADMIN, Role.USER)
    }
});

User.hasOne(Student, {
    foreingKey: 'StudentId',
    sourceKey: 'id'
});

Student.belongsTo(User, {
    foreingKey: 'StudentId',
    targetId: 'id'
});

User.hasOne(Teacher, {
    foreingKey: 'TeacherId',
    sourceKey: 'id'
});

Teacher.belongsTo(User, {
    foreingKey: 'TeacherId',
    targetId: 'id'
});

export default User;