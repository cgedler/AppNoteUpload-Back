
import logger from '../middleware/logger.js'
import userService from '../services/user.service.js';

export const login = async (req, res) => {
    try {
        const data = req.body;
        //console.log(data);
  
        logger.info(`entrando en el comtrolador login`);
        //logger.info(`param: ` + req.body);  // objeto
        //
//logger.info(`param: ` + req.params.password);
        const username = req.body.username;
        const password = req.body.password;
        if (validateParam(username) & validateParam(password)) {
       
            const result = await userService.login(req.body);
            // preparar aqui el token
            return res.json(result);
            
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