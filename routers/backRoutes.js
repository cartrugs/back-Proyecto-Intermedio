const express = require("express")
const { check } = require('express-validator')
const {obtenerPelicula, buscarPelicula, crearPelicula, actualizarPelicula, borrarPelicula} = require("../controllers/controllerPeliculas")
const router = express.Router()
const { validarEx } = require('../middleware/validation');

//RECOGER TODAS LAS PELICULAS
router.get('/', obtenerPelicula)

//RECOGER UNA PELICULA POR SU NOMBRE
router.get('/:titulo', buscarPelicula)

//CREAR UNA PELICULA
router.post("/", 
[
    check("titulo", "El título es obligatorio").not().isEmpty(),
    check("genero", "El género es obligatoria").not().isEmpty(),
    check("anio", "El año es obligatorio").not().isEmpty(),
    check("director", "El director es obligatoria").not().isEmpty(),
    check("duracion", "La duración es obligatoria").not().isEmpty(),
    validarEx ,
],crearPelicula)

//ACTUALIZAR UNA PELICULA
router.put("/:id",
[
    check("titulo", "El título es obligatorio").not().isEmpty(),
    check("genero", "El género es obligatoria").not().isEmpty(),
    check("anio", "El año es obligatorio").not().isEmpty(),
    check("director", "El director es obligatoria").not().isEmpty(),
    check("duracion", "La duración es obligatoria").not().isEmpty(),
    validarEx ,
], actualizarPelicula)

//ELIMINAR UNA PELICULA
router.delete("/:id", borrarPelicula)



module.exports = router
