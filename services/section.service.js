

import logger from '../middleware/logger.js'
import db from '../config/database.js';
import Section from '../models/section.model.js';


export async function getAll() {
    return await Section.findAll();
}

export async function getById(id) {
    return await getOne(id);
}

export async function create(params) {
    if (await Section.findOne({ where: { id: params.id } })) {
        throw 'Section :"' + params.id + '" is already registered';
    }
    const section = new Section(params);
    await section.save();
    return section;
}

export async function update(id, params) {
    const section_old = await getOne(id);
    section_old.description = params.description;
    section_old.journey = params.journey;
    section_old.quarter = params.quarter;
    await section_old.save();
    return section_old;
}

export async function eliminate(id) {
    const section = await Section.destroy({
        where: {
            id
        }
    });
    if (!section) throw 'Section not found';
    return section;
}

async function getOne(id) {
    const section = await Section.findByPk(id);
    if (!section) throw 'Section not found';
    return section;
}

export default { getAll, getById, create, update, eliminate };