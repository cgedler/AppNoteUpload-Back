/**
 * Service class in charge of the persistence of the student table
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import logger from '../middleware/logger.js'
import db from '../config/database.js';
import Student from '../models/student.model.js';


export async function getAll() {
    return await Student.findAll();
}

export async function getById(id) {
    return await getOne(id);
}

export async function create(params) {
    if (await Student.findOne({ where: { id: params.id } })) {
        throw 'Student :"' + params.id + '" is already registered';
    }
    const student = new Student(params);
    await student.save();
    return student;
}

export async function update(id, params) {
    const student_old = await getOne(id);
    student_old.name = params.name;
    student_old.surname = params.surname;
    student_old.sex = params.sex;
    student_old.birthdate = params.birthdate;
    student_old.phone = params.phone;
    student_old.email = params.email;
    student_old.license = params.license;
    await student_old.save();
    return student_old;
}

export async function eliminate(id) {
    const student = await Student.destroy({
        where: {
            id
        }
    });
    if (!student) throw 'Student not found';
    return student;
}

async function getOne(id) {
    const student = await Student.findByPk(id);
    if (!student) throw 'Student not found';
    return student;
}

export default { getAll, getById, create, update, eliminate };