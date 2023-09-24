const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require("../config/config");

// // AUTH
const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12);
  return hashedPassword;
};

const validatePassword = async (password, hashedPassword) => {
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  return isPasswordValid;
};

const createToken = async (tokenDataObject) => {
  const jwtToken = jwt.sign(
    { data: { ...tokenDataObject } },
    config.auth.secret,
    { expiresIn: 24 * 60 * 60 }
  );
  return jwtToken;
};

const validateToken = async (token) => {
  try {
    // verify a token symmetric - synchronous
    const decodedToken = jwt.verify(token, "secretKey");
  } catch (error) {}
};

// // module exports ======================================
module.exports = {
  hashPassword,
  validatePassword,
  createToken,
  validateToken,
};
