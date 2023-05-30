const mongoose = require('mongoose');
require('dotenv').config();
const gsApi = require('./Databases')

module.exports = () => {
    mongoose.connect(gsApi,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 .then(() => console.log('DB Connected'));
}