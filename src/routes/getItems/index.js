const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.status(200).send('shopping item');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(`item id${id}`);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
