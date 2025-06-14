import dotenv from 'dotenv';
import express from 'express';
import { logger } from './utils/logger';
import { UnifiedMemoryEngine } from './core/memory-engine';
import apiRouter from './api/routes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize the memory engine
const memoryEngine = new UnifiedMemoryEngine();

// Routes
app.use('/api', apiRouter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Unified Memory Server running on port ${PORT}`);
  logger.info(`🧠 Memory engine initialized`);
});

export { memoryEngine };