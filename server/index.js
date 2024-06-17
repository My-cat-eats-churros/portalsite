const express = require('express');
const dotenv = require('dotenv');
const { connectDb } = require('./config/database');
const userRouter = require('./routes/user.Routes');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Iinitialized Database Configuration
connectDb();

app.use(express.json());
var cors = require('cors');
app.use(cors());

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

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
