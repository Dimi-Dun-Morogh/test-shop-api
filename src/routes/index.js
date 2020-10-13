const getItems = require('./getItems');
const editItem = require('./editItem');
const deleteItem = require('./deleteItem');
const createItem = require('./createItem');

const ROUTES = {
  '/api/items': getItems,
  '/api/item-update': editItem,
  '/api/item-delete': deleteItem,
  '/api/item-create': createItem,
};

module.exports = ROUTES;
