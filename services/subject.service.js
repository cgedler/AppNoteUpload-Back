/**
 * Service class in charge of the persistence of the subject table
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import logger from '../middleware/logger.js'
import db from '../config/database.js';
import Subject from '../models/subject.model.js';


export async function getAll() {
    return await Subject.findAll();
}

export async function getById(id) {
    return await getOne(id);
}

export async function create(params) {
    if (await Subject.findOne({ where: { id: params.id } })) {
        throw 'Subject :"' + params.id + '" is already registered';
    }
    const subject = new Subject(params);
    await subject.save();
    return subject;
}

export async function update(id, params) {
    const subject_old = await getOne(id);
    subject_old.description = params.description;
    subject_old.journey = params.journey;
    subject_old.quarter = params.quarter;
    await subject_old.save();
    return subject_old;
}

export async function eliminate(id) {
    const subject = await Subject.destroy({
        where: {
            id
        }
    });
    if (!subject) throw 'Subject not found';
    return subject;
}

async function getOne(id) {
    const subject = await Subject.findByPk(id);
    if (!subject) throw 'Subject not found';
    return subject;
}

export default { getAll, getById, create, update, eliminate };