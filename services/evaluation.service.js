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
    return await User.findAll();
}

export async function getById(id) {
    return await getOne(id);
}

export async function create(params) {
    if (await User.findOne({ where: { username: params.username } })) {
        throw 'User :"' + params.username + '" is already registered';
    }
    var password_crypt = '';
    if (params.password) {
        var salt = bcrypt.genSaltSync(10);
        password_crypt = bcrypt.hashSync(params.password, salt);
    }   
    const user = new User(params);
    user.password = password_crypt; 
    await user.save();
    return user;
}

export async function update(id, params) {
    const user_old = await getOne(id);
    // validate
    const usernameChanged = params.username && user_old.username !== params.username;
    if (usernameChanged && await User.findOne({ where: { username: params.username } })) {
        throw 'Username "' + params.username + '" is already taken';
    }
    var password_crypt = '';
    if (params.password) {
        var salt = bcrypt.genSaltSync(10);
        password_crypt = bcrypt.hashSync(params.password, salt);
    }
    user_old.username = params.username;
    user_old.name = params.name;
    user_old.password = password_crypt;
    user_old.role = params.role;
    await user_old.save();
    return user_old;
}

export async function eliminate(id) {
    const user = await User.destroy({
        where: {
            id
        }
    });
    if (!user) throw 'User not found';
    return user;
}

async function getOne(id) {
    const user = await User.findByPk(id);
    if (!user) throw 'User not found';
    return user;
}

export default { getAll, getById, create, update, eliminate };