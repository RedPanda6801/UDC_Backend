const express = require('express');
const router = express();

// for signUp
router.post('/signUp', signUp);

// for signIn
router.post('/signIn', signIn);

