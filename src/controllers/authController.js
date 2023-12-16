const jwt = require('jsonwebtoken');
const User = require('../models/user');

class AuthController {
  async register(req, res) {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  }

  async login(req, res) {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !user.validatePassword(password)) {
      return res.status(401).send({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user.id }, 'SECRET_KEY', { expiresIn: '7d' });
    res.send({ token });
  }

  logout(req, res) {
    // Since we're using stateless JWT, logout is handled on the client side by removing the JWT from local storage.
    res.send({ message: 'User logged out successfully' });
  }
}

module.exports = new AuthController();