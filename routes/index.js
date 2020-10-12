const getItems = require('./getItems');
const editItem = require('./editItem');
const deleteItem = require('./deleteItem');
const createItem = require('./createItem');

const ROUTES = {
  '/items': getItems,
  '/item-edit': editItem,
  '/item-delete': deleteItem,
  '/item-create': createItem,
};

module.exports = ROUTES;
