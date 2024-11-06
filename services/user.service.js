

import bcrypt from 'bcryptjs';
import db from '../config/database.js';
import User from '../models/user.model.js';


export async function getAll() {
    return await User.findAll();
}

export async function create(params) {
    if (await db.User.findOne({ where: { username: params.username } })) {
        throw 'User :"' + params.username + '" is already registered';
    }
    const user = new db.User(params);
    // hash password
    
    await user.save();
    return user;
}

export default { getAll, create };

/*
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

// Load hash from your password DB.
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    // res === true
});

 var salt = bcrypt.genSaltSync(1);
        var hash = bcrypt.hashSync("clave1234", salt);
        console.log(hash);
 *
 *
 **/

