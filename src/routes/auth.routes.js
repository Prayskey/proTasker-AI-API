import { Router } from 'express';
import { register } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', register);

export default router;



// app.get("/", (req, res) => {
//   res.json({ "response": "You've successfully connected to the server!" });
// });

// app.post("/register", (req, res) => {
//   // Handle registration logic here
//   console.log(req.body);

// })

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// export default app;