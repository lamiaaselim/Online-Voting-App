const UserSchema = require("./../Model/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      isAdmin: user.role === 'admin',
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );
};

// Register new user
exports.register = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await UserSchema.create({ username, password });
    res.status(201).json({
      _id: user._id,
      username: user.username,
      isAdmin: user.role === 'admin',
      token: generateToken(user),
    });
  } catch (error) {
    next(error);
  }
};

// Login
exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await UserSchema.findOne({ username });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        isAdmin: user.role === 'admin',
        token: generateToken(user),
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    next(error);
  }
};
