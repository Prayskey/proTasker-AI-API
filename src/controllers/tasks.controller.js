import pool from '../config/db.js';

export const getTasks = async (req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.status(200).json({ status: 'success', data: result.rows });
  } catch (err) {
    next(err);
  }
};

export const createTask = async (req, res, next) => {
  try {
    const { title, description, priority } = req.body;

    if (!title) {
      const error = new Error('Title is required');
      error.status = 400;
      throw error;
    }

    const result = await pool.query(
      'INSERT INTO tasks (title, description, priority) VALUES ($1, $2, $3) RETURNING *',
      [title, description, priority || 'medium']
    );

    res.status(201).json({ message: 'Task created successfully', data: result.rows[0] });
  } catch (err) {
    next(err);
  }
};

export const aiTaskBreakdown = async (req, res, next) => {
  try {
    const { goal } = req.body;

    if (!goal) {
      const error = new Error('Goal is required for AI breakdown');
      error.status = 400;
      throw error;
    }

    // Placeholder for AI integration (e.g., Google Generative AI SDK)
    const mockSubtasks = ["Research flights", "Book hotel", "Pack bags"];

    res.status(200).json({
      goal,
      suggested_subtasks: mockSubtasks
    });
  } catch (err) {
    next(err);
  }
};