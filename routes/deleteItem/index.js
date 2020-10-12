const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    res.status(200).send(`deleted ${id}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
