const express = require('express');
const authMiddleWare = require('../../middlewares/authMiddleware');
const { deleteShoppingItem } = require('../../controllers/shoppingItems');

const router = express.Router();

router.post('/', authMiddleWare, async (req, res) => {
  try {
    const { id } = req.body;
    const item = await deleteShoppingItem(id);
    res.status(200).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
