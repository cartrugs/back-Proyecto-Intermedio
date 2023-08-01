const Pelicula = require('../models/PeliculaModels')

const buscarPeliculas = async (req, res) => {
    const titulo = await req.params.titulo;
    console.log(titulo)

    try {

        const existe = await Pelicula.findOne({ titulo });
        console.log(existe)

        if (existe) {
            return res.status(200).json({
                ok: true,
                data: existe,
                msg: 'Pelicula encontrada'
            });

        } else {

            return res.status(400).json({
                msg: "No se encuentran películas con ese título"
            })

        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Contactar con el administrador"
        })

    }

}

module.exports = { buscarPeliculas }