const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./config/database');
const userRouter = require('./routes/user.Routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Iinitialized Database Configuration
connectDb();

app.use(express.json());

// Import The User Route
app.use('/api/v1/user', userRouter);

// Root Entry
app.get('/', (req, res) => {
  res.send('환영합니다.');
});

// Listened to the PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
