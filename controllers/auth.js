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
        if (!isUser){
            await User.create({
                name,
                email,
                userId,
                password,
                nickname,
            })
            return res.Status(201).json({
                message: "회원 가입 성공!",
            });
        }else{
            res.Status(400).json({
                message: "회원 정보를 확인 해주세요!"
            })
        }
        
    } catch (error) {
        return res.Status(404).json({
            
        });
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