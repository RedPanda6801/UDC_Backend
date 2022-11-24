const express = require("express");
const router = express();
const { signUp, signIn } = require("../controllers/auth");

// for signUp
router.post("/signUp", signUp);

// for signIn
router.post("/signIn", signIn);
