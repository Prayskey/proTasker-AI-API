import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import 'dotenv/config';
import authRoutes from './routes/auth.routes.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();

app.use(helmet());

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  message: { error: 'Too many requests, please try again later.' },
  standardHeaders: 'draft-8',
  legacyHeaders: false,
});
app.use('/api', limiter);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "You've successfully connected to the server!" });
});

app.use('/api/auth', authRoutes);

app.use(errorHandler);

export default app;
