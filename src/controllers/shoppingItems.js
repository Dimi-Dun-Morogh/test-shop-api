const shoppingItem = require('../models/shoppingItem');
const {
  getItemById,
  getAllItems,
  createItem,
  deleteItem,
  updateItem,
  getItemByName,
} = require('../db/db.crud');

async function getShoppingItemById(id) {
  try {
    const item = await getItemById(shoppingItem, id);
    return item;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function createShoppingItem(data) {
  try {
    await createItem(shoppingItem, data);
    const updatedItem = await getItemByName(shoppingItem, data.name);
    return updatedItem;
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

async function updateShoppingItem(data) {
  try {
    await updateItem(shoppingItem, data);
    const updatedItem = await getItemByName(shoppingItem, data.name);
    return updatedItem;
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
