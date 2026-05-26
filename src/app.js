import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/auth.routes.js';
import errorHandler from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

app.get('/', (req, res) => {
  res.json({ response: "You've successfully connected to the server!" });
});

app.use('/api/auth', authRoutes);
app.use(errorHandler);

export default app;