const express = require('express');
const authMiddleWare = require('../../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleWare, async (req, res) => {
  try {
    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
