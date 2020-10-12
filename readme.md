|      |                  | see https://whimsical.com/H28vQ6azzapXyXsD7QnDCR for better refference;                                                     |
|------|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GET  | /api/items       | will return array of objects                                                                                                |
| GET  | /api/items/:id   | will return item object by id                                                                                               |
| POST | /api/item-create | will accept an object f.e. {name: String, price: String, ...} (see db scheme (https://whimsical.com/H28vQ6azzapXyXsD7QnDCR) |
| POST | /api/item-delete | will accept an object with only required field - id; will delete item from collection                                       |
| POST | /api/item-update | will accept an object with only required field - name; will update item;                                                    |
|      |                  | every POST request will require a bearer token - 45asd4s5d4as54a5s4;                                                        |
|      |                  | live link - https://test-shop-apis.herokuapp.com/api/items                                                                  |