const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

exports.signUp = async (req, res) => {
  try {
    const { username, password, gender } = req.body;

    // 입력 필드가 유효한지 확인하십시오.
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: 'Please Input Username and Password' });
    }

    // 사용자가 데이터베이스에 존재하는지 확인
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'User Already Exists' });
    }

    // 사용자 비밀번호 해시
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 사용자를 데이터베이스에 저장
    const newUser = new User({
      username,
      password: hashedPassword,
      gender,
    });

    await newUser.save();

    return res
      .status(201)
      .json({ message: 'User Created Successfully', newUser });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Error creating user' });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // 입력 필드가 유효한지 확인하십시오.
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: 'Please Input Username and Password' });
    }

    // 사용자가 데이터베이스에 존재하는지 확인
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // 비밀번호 비교
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // JWT 토큰 생성
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.SECRET_KEY || '1234!@#%<{*&)',
      { expiresIn: '1h' }
    );

    return res
      .status(200)
      .json({ message: 'Login Successful', data: user, token });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Error during login' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    // 데이터베이스에서 모든 사용자 검색
    const users = await User.find({}, { password: 0 }); // 응답에서 비밀번호 필드를 제외하세요.

    return res.status(200).json({ users });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Error fetching users' });
  }
};
