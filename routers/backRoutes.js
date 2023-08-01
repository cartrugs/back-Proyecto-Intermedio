const express = require("express")
const { buscarPeliculas, createPelicula } = require("../controllers/controllerPeliculas")
const router = express.Router()

//RECOGER TODAS LAS PELICULAS
// router.get('/movies', buscarPeliculas)

//RECOGER UNA PELICULA POR SU NOMBRE
router.get('/movies/:titulo', buscarPeliculas)

//CREAR UNA PELICULA

router.post("/movies", createPelicula)
//ACTUALIZAR UNA PELICULA

//ELIMINAR UNA PELICULA








module.exports = router
