const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// User-agent middleware
app.use((req, res, next) => {
  console.log(`User-Agent: ${req.headers['user-agent']}`);
  next();
});

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.use(errorMiddleware);

module.exports = app;
