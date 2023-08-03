const express = require ('express');
const { dbConnect } = require('./helpers/connection');
require('dotenv').config();


//SERVIDOR
const app = express();

//PORT
const port = process.env.PORT

//CONEXIÓN BBDD
dbConnect();

//CORS
app.use(cors())

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

//parse application/json
app.use(express.json())

//RUTAS
app.use('/api/v1/movies',require('./routers/backRoutes'));

app.use('/api/v1/auth', require('./routers/authRouters'));

//SERVIDOR A LA ESCUCHA
app.listen(port, ()=>{
    console.log(`Servidor a la escucha del puerto ${port}`)

});
