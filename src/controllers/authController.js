const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
//emailOrUsername
function identifyInput(input) {
  if (input.includes('@')) {
    return 'email';
  } else {
    return 'username';
  }
}

// 注册

exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  //检查Body中是否包含username和password
  if (!username || !password || !email) {
    return res.status(400).send({ message: 'Username, password and email are required' });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  //debug
  console.log(req.body);  // 打印请求体
  console.log(hashedPassword);
  //debug end
  try {
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      email: req.body.email
    });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).send({ message: 'Username or email already exists' });
    }
    // 其他错误处理
    return res.status(500).send({ message: 'Server error' });
  }
};
// 登录
exports.login = async (req, res) => {
  const inputType = identifyInput(req.body.username);
  const user = await User.findOne({ where: { [inputType]: req.body.username }});
  if (!user) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.send({ token });
};