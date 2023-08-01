const Pelicula = require('../models/PeliculaModels');

//RECOGER TODAS LAS PELIS
const obtenerPelicula = async (req, res) => {

    try {
        
        const peliculas = await Pelicula.find();
        console.log(peliculas);

        return res.status(200).json({
            ok: true,
            msg: 'Catálogo de películas',
            data: peliculas,

        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error 500. Contactar con el administrador'
        });
    }
}

//BUSCAR UNA PELI POR SU NOMBRE
const buscarPelicula = async (req, res) => {
    const titulo = await req.params.titulo;
    console.log(titulo);

    try {

        const existe = await Pelicula.findOne({ titulo });
        console.log(existe);

        if (existe) {
            return res.status(200).json({
                ok: true,
                data: existe,
                msg: 'Película encontrada'
            });

        } else {

            return res.status(400).json({
                msg: "No se encuentran películas con ese título"
            });

        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contactar con el administrador"
        });

    }

}

//AÑADIR PELI//
const crearPelicula = async (req, res) => {
    const peli = new Pelicula(req.body);

    try {

        const peliGuardada = await peli.save()
        console.log(peliGuardada)
        return res.status(201).json({
            ok: true,
            pelicula: peliGuardada,
            msg: "Película añadida"

        });
    } catch (error) {
        console.log(error);
    }

}

//ACTUALIZAR PELI//
const actualizarPelicula = async (req, res) => {
    const id = await req.params.id;
    const datos = req.body;


    try {
        const existe = await Pelicula.findByIdAndUpdate({ _id: id });
        const peliModificada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(existe);

        if (existe) {
            return res.status(200).json({
                ok: true,
                pelicula: peliModificada,
                msg: "Película actualizada"
            });
        }
        return res.status(400).json({
            msg: "No hay películas con ese título"
        });

    } catch (error) {
        
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"

        });

    }
}


//BORRAR PELI//
const borrarPelicula = async (req, res) => {
    const id = await req.params.id;
    console.log(id);

    try {
        const existe = await Pelicula.findByIdAndDelete(id);
        console.log(existe);
        if (existe) {
            return res.status(200).json({
                ok: true,
                data: existe,
                msg: 'Película eliminada'
            });

        } else {

            return res.status(400).json({
                msg: "No hay películas con ese título"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"

        });
    }

}

module.exports = {
    obtenerPelicula,
    buscarPelicula,
    crearPelicula,
    actualizarPelicula,
    borrarPelicula
}