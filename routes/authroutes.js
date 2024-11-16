import express from 'express';

const router = express.Router();

router.get('/register', (req, res) => {
  res.send('This is register route')
})

router.get('/login', (req, res) => {
  res.send('This is login route')
})

export default router;