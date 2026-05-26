export const register = async (req, res, next) => {
  try {
    console.log(req.body);
    res.status(201).json({ message: 'Register endpoint hit' });
  } catch (err) {
    next(err);
  }
};