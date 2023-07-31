const express = require ('express');

require('dotenv').config();

const { dbConnect } = require('./helpers/connection') 

//SERVIDOR
const app = express();

//PORT
const port = process.env.PORT

//CONEXIÓN BBDD
dbConnect();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//RUTAS
app.use('/api/v1/',require('./routers/backRoutes'));

//APP A LA ESCUCHA
app.listen(port, ()=>{
    console.log(`Servidor a la escucha del puerto ${port}`)
});