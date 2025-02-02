const express = require('express');
const {
  signup,
  verifyOTP,
  login,
} = require('../../controllers/auth.controller');
const { signupValidation, validate } = require('../../validation/validate');

const router = express.Router();

// Signup route
router.post('/signup', signupValidation, validate, signup);

// Verify OTP route
router.post('/verify-otp', verifyOTP);

// Login route
router.post('/login', login);

module.exports = router;
