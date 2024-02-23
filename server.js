const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes/route.js');
routes(app,fs);
const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});