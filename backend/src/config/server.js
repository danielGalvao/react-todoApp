const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');

const server = express();

server.user(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function(){
  console.log(`backend is running on port ${port}.`);
});
