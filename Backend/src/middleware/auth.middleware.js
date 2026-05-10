require('dotenv').config();
const UserModel = require('../models/usermodel');
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) {
    return res.status(400).json({
      message: 'Access token required, please login again'
    });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(400).json({
      message: 'Access token required, please login again'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY || process.env.SECRETE_KEY);
    req.userId = decoded.id;
    req.user = await UserModel.findById(decoded.id);
    return next();
  } catch (error) {
    return res.status(403).json({
      message: `invalid or expired token: ${error.message}`
    });
  }
};

module.exports = auth;
