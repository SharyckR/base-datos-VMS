require('dotenv').config();
const express = require('express');
const morgan = require('morgan')
const pkg = require('../package.json')
var cors = require('cors')
const conection = require('./database')
const userRoutes = require('./routes/routes')
const app = express();

app.set('pkg', pkg)

//Conecion base de datos
conection()

app.use(cors())
app.use(express.json())

//routes
app.use(userRoutes)


app.get('/', (req, res) => {
    res.json({
        Nombre: app.get('pkg').name,
        Autor: app.get('pkg').author,
        Descripcion: app.get('pkg').description,
        Version: app.get('pkg').version
    })
})


module.exports = app;
