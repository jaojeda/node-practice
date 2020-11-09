require('dotenv').config();
require('./api/utils/connect')();

const app = require('./app');

const port = process.env.PORT || 3000;

app.listen(port)
