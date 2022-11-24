const express = require('express');
const router = express();
const { verifyToken } = require('../middlewares/middlewares');
const {
    signUp,
    signIn,
} = require('../controllers/auth');



// for signUp
router.post('/signUp', signUp);

// for signIn
router.post('/signIn', signIn);


 