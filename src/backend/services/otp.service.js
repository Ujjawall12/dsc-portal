const otpGenerator = require("otp-generator");

// Generate 6-digit OTP
const generateOTP = () => {
  return otpGenerator.generate(6, {
    digits: true,
    alphabets: false,
    specialChars: false,
  });
};

// Validate OTP expiry (check if OTP is expired)
const isOTPExpired = (expiryTime) => {
  return Date.now() > expiryTime;
};

module.exports = { generateOTP, isOTPExpired };
