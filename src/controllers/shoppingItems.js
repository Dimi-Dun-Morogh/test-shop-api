const shoppingItem = require('../models/shoppingItem');
const { getItemById, getAllItems, createItem, deleteItem, updateItem } = require('../db/db.crud');

async function createShoppingItem(data) {
  try {
    const item = await createItem(shoppingItem, data);
    return item;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function deleteShoppingItem(id) {
  try {
    const item = await deleteItem(shoppingItem, id);
    return item;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getAllShoppingItems() {
  try {
    const allItems = await getAllItems(shoppingItem);
    return allItems;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getShoppingItemById(id) {
  try {
    const item = await getItemById(shoppingItem, id);
    return item;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateShoppingItem(data) {
  try {
    const item = await updateItem(shoppingItem, data);
    return item;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  createShoppingItem,
  deleteShoppingItem,
  getAllShoppingItems,
  getShoppingItemById,
  updateShoppingItem,
};
