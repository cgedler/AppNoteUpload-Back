/**
 * Login controller class
 * 
 * @author Christopher Gedler <cgedler@gmail.com>
 * @version 1.0
 * @since Nov 8, 2024
 */


import logger from '../middleware/logger.js';
import userService from '../services/user.service.js';
import jwtoken from '../services/jwt.service.js';

export const login = async (req, res) => {
    try {
        logger.info(`Inside login controller`);
        const username = req.body.username;
        const password = req.body.password;
        if (validateParam(username) & validateParam(password)) {
            const usertoken = await userService.login(req.body);
            const user = { 
                roles: usertoken.role,
                sub: usertoken.username
            }; 
            const token = await jwtoken.generateToken(user);
            return res.json({ token });
        } else {
            logger.error(`Error: The parameters are empty or null`);
            return res.status(400).json({ message: "Error: The parameters are empty or null"});
        }
     } catch (error) {
        logger.error(`Error: ${error}`);
        return res.status(500).json({ message: "Error: " + error.message }); 
    }   
};

function validateParam(param) {
    if (!param) {
        return false;
    } else if (typeof param === "string" && param.trim().length === 0) {
        return false;
    } else if (param === null) {
        return false;
    } else {
        return true;
    }
}