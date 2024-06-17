const mongoose = require('mongoose');

exports.connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB가 연결되었습니다.');
  } catch (error) {
    console.error(error.message);
  }
};
