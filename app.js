const express = require('express');

const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

const PORT = 3000;
app.use(cors());

http.listen(PORT, () => {
  console.log(`SERVER UP AND RUNNING PORT: ${PORT}`);
});
