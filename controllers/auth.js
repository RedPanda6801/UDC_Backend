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
			const hash = await bcrypt.hash(password, 12);
            await User.create({
                name,
                email,
                userId,
                password: hash,
                nickname,
            })
            return res.Status(201).json({
                message: "SignUp Success",
            });
        }else{
            res.Status(400).json({
                message: "Check SignUp Info"
            })
        }
    } catch (error) {
       console.error(error);
       next(error);
    }
};


// for signIn


exports.signIn = async(req, res, next)=>{
	try {
		const { userId, password } = req.body;
		const validId = await User.findOne({where:{
			userId,
		}})
		if(userId){
			const validPassword = await bcrypt.compare(password, validId.password);
			if(validPassword){
				const token = jwt.sign({
					id: validId.id,
					isAdmin: validId.isAdmin,
				}, process.env.JWT_SECRET, {
					expiresIn: '30000m', // for test  
					issuer: 'UDC',
				});
				return res.status(200).json({
				    message: 'token issued',
				    token,
				});
			}
			else{
				return res.status(400).json({
					message: 'Check Your Login Info'
				})
			}
		} 
	} catch (error) {
		console.error(error);
		next(error);
	}	
}