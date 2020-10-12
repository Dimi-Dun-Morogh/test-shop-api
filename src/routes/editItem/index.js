const express = require('express');
const authMiddleWare = require('../../middlewares/authMiddleware');
const { updateShoppingItem } = require('../../controllers/shoppingItems');

const router = express.Router();

router.post('/', authMiddleWare, async (req, res) => {
  try {
    const item = await updateShoppingItem(req.body);
    res.status(200).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
