// const Pelicula = require('../models/PeliculasModels')

// const buscarPeliculas = async (req, res) => {
//     const pelicula = Pelicula(req.body)


//     try {
//         // const {titulo}  = req.body;
//         // const pelicula = await Pelicula.find({titulo: titulo})
//         // console.log(pelicula)
//         const titulo = pelicula.titulo;
//         const existe= await Pelicula.find({}, titulo);
//         console.log(existe, titulo)

//         if (existe) {
//             return res.status(200).json({
//                 ok: true,
//                 pelicula: titulo,
//                 msg: 'Pelicula encontrada'
//             });

//         } else {

//             return res.status(400).json({
//                 msg: "No se encuentran películas con ese título"
//             })

//         }
        
//     } catch (error) {
//         console.log(error)
//             return res.status(500).json({
//                 ok: false,
//                 msg: "Contactar con el administrador"
//             })

//         }
        
//     }

// module.exports = { buscarPeliculas }