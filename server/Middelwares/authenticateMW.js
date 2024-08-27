const jwt = require('jsonwebtoken');
const User = require('./../Model/userModel');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach the isAdmin flag to the req object
      req.user = await User.findById(decoded.id).select('-password');
      // Include isAdmin from the token
      req.user.isAdmin = decoded.isAdmin; 

      next();
    } catch (error) {
      res.status(401).json({ error: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ error: 'Not authorized, no token' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    // Allow access if the user is an admin
    next(); 
  } else {
    res.status(403).json({ error: 'Not authorized as an admin' });
  }
};


module.exports = { protect , admin};
