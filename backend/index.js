import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import moveRoutes from './routes/moveRoutes.js';
import deployRoutes from './routes/deployRoutes.js';
import canvasRoutes from './routes/canvasRoutes.js';
import path from 'path';
import exp from 'constants';

dotenv.config();

const app = express();

const _dirname = path.resolve();

const corsOptions = {
  origin: ["https://smart-contract-copilot.onrender.com", "http://localhost:5173", "http://localhost:3000"],
  credentials: true
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/move', moveRoutes);
app.use('/api/deploy', deployRoutes);
app.use('/api/canvas', canvasRoutes);

app.use(express.static(path.join(_dirname, '/frontend/dist')));
app.get('*', (_, res) => {
  res.sendFile
  (path.resolve(_dirname, 'frontend', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

