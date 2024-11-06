
import logger from '../middleware/logger.js'
import userService from '../services/user.service.js';


export const get = async (req, res) => {
    try {
        const result = await userService.getAll();
        return res.json(result);      
    } catch (error) {
        return res.status(500).send('Error fetching users');
        logger.error(`Error fetching users: ${error}`);
    }   
};

export const getById = async (req, res) => {
    return res.send('Get By Id');

};

export const insert = async (req, res) => {
    const result = await create(req.body);
    console.log(result);
    return res.send('Insert');
};

export const update = async (req, res) => {
    return res.send('Update');
};

export const eliminate = async (req, res) => {
    return res.send('Delete');
};