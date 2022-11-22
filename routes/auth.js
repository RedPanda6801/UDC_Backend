const express = require('express');
const router = express();
const { verifyToken } = require('../middlewares/middlewares');

// for signUp
router.post('/signUp', verifyToken, signUp);

// for signIn
router.post('/signIn', verifyToken, signIn);

