const { User } = require('../models');
// import jwt for use jwt token
const jwt = require('jsonwebtoken');

// import bcrypt for password hashing
const bcrypt = require('bcrypt');



// for signUp

exports.signUp = async(req, res, next)=>{
    try {
        const { name, email, userId, password, nickname } = req.body;
        const isUser = await User.findOne({where:{ userId }});
        if(isUser){
            return res.sendStatus(400);
        }
        await User.create({
            name,
            email,
            userId,
            password,
            nickname,
        })
        return res.sendStatus(201);
    } catch (error) {
        return res.sendStatus(404);
    }
}


// for signIn


exports.signIn = async(req, res, next)=>{
    try {
        const { userId, password } = req.body;
        const validId = await User.findOne({where: userId })
        if(validId){
            if(password === validId.password){
                return res.sendStatus(200);
            }else{
                return res.sendStatus(400);
            }
        }else{
            return res.sendStatus(400);
        }
    } catch (error) {
        return res.sendStatus(400);
    }
}