/**
 * Section controller class
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import logger from '../middleware/logger.js';
import sectionService from '../services/section.service.js';

export const get = async (req, res) => {
    try {
        const result = await sectionService.getAll();
        return res.json(result);      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message }); 
    }   
};

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await sectionService.getById(id);
        return res.json(result);      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message }); 
    }

};

export const insert = async (req, res) => {
    try {
        const result = await sectionService.create(req.body);
        return res.json(result);      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message }); 
    }
};

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await sectionService.update(id, req.body);
        return res.json(result);      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " +  error.message }); 
    }
};

export const eliminate = async (req, res) => {
    try {
        const id = req.params.id; 
        const result = await sectionService.eliminate(id);
        return res.status(204).json({ message: "Was Delete" });      
    } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message });  
    }
};


