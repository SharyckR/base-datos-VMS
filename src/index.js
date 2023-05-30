require('dotenv').config();
const app = require('./app')
let port = 8080;
app.listen(port);
console.log('Server listen on port', port)