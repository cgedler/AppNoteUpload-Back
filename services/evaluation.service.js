/**
 * Service class in charge of the persistence of the evaluation table
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import logger from '../middleware/logger.js'
import db from '../config/database.js';
import Evaluation from '../models/evaluation.model.js';


export async function getAll() {
    return await Evaluation.findAll();
}

export async function getById(id) {
    return await getOne(id);
}

export async function create(params) {
    if (await Evaluation.findOne({ where: { id: params.id } })) {
        throw 'Evaluation :"' + params.id + '" is already registered';
    }
    const evaluation = new Evaluation(params);
    await evaluation.save();
    return evaluation;
}

export async function update(id, params) {
    const evaluation_old = await getOne(id);
    evaluation_old.date = params.date;
    evaluation_old.note = params.note;
    evaluation_old.student = params.student;
    evaluation_old.teacher = params.teacher;
    evaluation_old.subject = params.subject;
    await evaluation_old.save();
    return evaluation_old;
}

export async function eliminate(id) {
    const evaluation = await Evaluation.destroy({
        where: {
            id
        }
    });
    if (!evaluation) throw 'Evaluation not found';
    return evaluation;
}

async function getOne(id) {
   const evaluation = await Evaluation.findByPk(id);
    if (!evaluation) throw 'Evaluation not found';
    return evaluation;
}

export default { getAll, getById, create, update, eliminate };