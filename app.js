const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const routes = require('./server/routes');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
console.log(`server running on port ${port}`)


module.exports = app;