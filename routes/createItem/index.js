const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    res.status(200).send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
