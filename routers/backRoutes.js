const express = require("express")
const { buscarPelicula, createPelicula, actualizarPelicula, borrarPelicula} = require("../controllers/controllerPeliculas")
const router = express.Router()

//RECOGER TODAS LAS PELICULAS
// router.get('/movies', buscarPeliculas)

//RECOGER UNA PELICULA POR SU NOMBRE
router.get('/movies/:titulo', buscarPelicula)

//CREAR UNA PELICULA
router.post("/movies", createPelicula)

//ACTUALIZAR UNA PELICULA
router.put("/movies/:id", actualizarPelicula)

//ELIMINAR UNA PELICULA
router.delete("/movies/:id", borrarPelicula)






module.exports = router
