const express = require('express');

const cors = require('cors');

const app = express();
const http = require('http').createServer(app);
const ROUTES = require('./routes/index');

const PORT = 3000;
app.use(cors());

app.use(express.json()); // activate middleware to parse JSON

// ROUTES
Object.entries(ROUTES).forEach(([path, route]) => app.use(path, route));

http.listen(PORT, () => {
  console.log(`SERVER UP AND RUNNING PORT: ${PORT}`);
});
