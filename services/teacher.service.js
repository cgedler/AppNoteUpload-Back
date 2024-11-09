/**
 * Service class in charge of the persistence of the teacher table
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import logger from '../middleware/logger.js'
import db from '../config/database.js';
import Teacher from '../models/teacher.model.js';


export async function getAll() {
    return await Teacher.findAll();
}

export async function getById(id) {
    return await getOne(id);
}

export async function create(params) {
    if (await Teacher.findOne({ where: { id: params.id } })) {
        throw 'Teacher :"' + params.id + '" is already registered';
    }
    const teacher = new Teacher(params);
    await teacher.save();
    return teacher;
}

export async function update(id, params) {
    const teacher_old = await getOne(id);
    teacher_old.name = params.name;
    teacher_old.surname = params.surname;
    teacher_old.sex = params.sex;
    teacher_old.birthdate = params.birthdate;
    teacher_old.phone = params.phone;
    teacher_old.email = params.email;
    await teacher_old.save();
    return teacher_old;
}

export async function eliminate(id) {
    const teacher = await Teacher.destroy({
        where: {
            id
        }
    });
    if (!teacher) throw 'Teacher not found';
    return teacher;
}

async function getOne(id) {
    const teacher = await Teacher.findByPk(id);
    if (!teacher) throw 'Teacher not found';
    return teacher;
}

export default { getAll, getById, create, update, eliminate };