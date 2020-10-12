const express = require('express');

const cors = require('cors');

const app = express();
const http = require('http').createServer(app);
const ROUTES = require('./routes/index');
const connectDb = require('./db/db-connect');

const PORT = 3000;
app.use(cors());

app.use(express.json()); // activate middleware to parse JSON

connectDb()
  .then(() => console.log('db connect success'))
  .catch((err) => console.log(err));

// ROUTES
Object.entries(ROUTES).forEach(([path, route]) => app.use(path, route));

http.listen(PORT, () => {
  console.log(`SERVER UP AND RUNNING PORT: ${PORT}`);
});
