const express = require("express")
const { buscarPeliculas } = require("../controllers/controllerPeliculas")
const router = express.Router()
router.get('/movies', buscarPeliculas)








module.exports = router
