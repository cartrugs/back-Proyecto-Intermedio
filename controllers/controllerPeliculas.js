const Pelicula = require('../models/PeliculaModels')

//RECOGER TODAS LAS PELIS


//BUSCAR UNA PELI POR SU NOMBRE
const buscarPelicula = async (req, res) => {
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

//AÑADIR PELI//
const createPelicula = async (req, res) => {
    const peli = new Pelicula(req.body)

    try {

        const peliGuardada = await peli.save()
        console.log(peliGuardada)
        return res.status(201).json({
            ok: true,
            pelicula: peliGuardada,
            msg: "añade peli"

        })
    } catch (error) {
        console.log(error)
    }

}

//ACTUALIZAR PELI//
const actualizarPelicula = async (req, res) => {
    const id = await req.params.id
    const datos = req.body


    try {
        const existe = await Pelicula.findByIdAndUpdate({ _id: id })
        const peliModificada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true })
        console.log(existe)

        if (existe) {
            return res.status(200).json({
                ok: true,
                pelicula: peliModificada,
                msg: "Pelicula actualizada"
            })
        }
        return res.status(400).json({
            msg: "no hay pelis con ese título"
        })

    } catch (error) {
        
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "contacta con el admin"

        })

    }
}


//BORRAR PELI//
const borrarPelicula = async (req, res) => {
    const id = await req.params.id;
    console.log(id)

    try {
        const existe = await Pelicula.findByIdAndDelete(id);
        console.log(existe)
        if (existe) {
            return res.status(200).json({
                ok: true,
                data: existe,
                msg: 'Pelicula eliminada'
            });

        } else {

            return res.status(400).json({
                msg: "no hay pelis con ese título"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "contacta con el admin"

        })
    }

}

module.exports = {
    buscarPelicula,
    createPelicula,
    actualizarPelicula,
    borrarPelicula
}