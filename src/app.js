import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';
import authRoutes from './routes/auth.routes.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
// Rate limiting middleware configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minute time window
  limit: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests, please try again later.',
  standardHeaders: 'draft-8', // Includes rate limit info in headers
});

// Apply globally or to specific routes
app.use('/api/', limiter); //
app.use(helmet());
app.use(express.json());
app.use(cors(corsOptions));



app.get('/', (req, res) => {
  res.json("You've successfully connected to the server!");
});

app.use('/api/auth', authRoutes);
app.use(errorHandler);

export default app;