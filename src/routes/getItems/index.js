const express = require('express');
const { getShoppingItemById, getAllShoppingItems } = require('../../controllers/shoppingItems');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allItems = await getAllShoppingItems();
    res.status(200).send(allItems);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const item = await getShoppingItemById(id);
    res.status(200).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
