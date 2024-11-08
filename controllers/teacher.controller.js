

import logger from '../middleware/logger.js'
import teacherService from '../services/teacher.service.js';

export const get = async (req, res) => {
    try {
        const result = await teacherService.getAll();
        return res.json(result);      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message }); 
    }   
};

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await teacherService.getById(id);
        return res.json(result);      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message }); 
    }

};

export const insert = async (req, res) => {
    try {
        const result = await teacherService.create(req.body);
        return res.json(result);      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message }); 
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await teacherService.update(id, req.body);
        return res.json(result);      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " +  error.message }); 
    }
};

export const eliminate = async (req, res) => {
    try {
        const id = req.params.id; 
        const result = await teacherService.eliminate(id);
        return res.sendStatus(204).json({ message: "Was Delete" });      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message });  
    }
};
