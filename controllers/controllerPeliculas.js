/**
 * Método para usar el modelo de la base de datos.
 * @type {PeliculaModel}
 */
const Pelicula = require('../models/PeliculaModels');
/******************** RECOGER TODAS LAS PELÍCULAS ********************/

/**
 * Método de controlador para obtener todas las películas con función asíncrona.
 * @param {Request} req - Objeto de solicitud que contiene los datos de la solicitud.
 * @param {Response} res - Objeto de respuesta que se utilizará para enviar una respuesta HTTP.
 * @returns {Promise<Response>} La respuesta HTTP con la lista de películas en formato JSON.
 */
const obtenerPelicula = async (req, res) => {

    try {
        /**
       * Realizar una consulta a la base de datos utilizando el modelo Pelicula.
       * El método find() busca todos los documentos en la colección asociada al modelo Pelicula.
       * Esta consulta devuelve una promesa que se resuelve con una lista de documentos que coinciden con los criterios de búsqueda.
       */
        const peliculas = await Pelicula.find();

        return res.status(200).json({
            ok: true,
            msg: 'Catálogo de películas',
            data: peliculas,
        });
        /**
            *Capturar y manejar posibles errores que puedan ocurrir durante la ejecución de la consulta o el renderizado de la vista.
            */
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error 500. Contactar con el administrador'
        });
    };
};
/******************** BUSCAR UNA PELÍCULA POR SU NOMBRE ********************/

/**
 * Método de controlador para buscarPelicula por su nombre con función asíncrona.
 * @param {Request} req - Objeto de solicitud que contiene los datos de la solicitud.
 * @param {Response} res - Objeto de respuesta que se utilizará para enviar una respuesta HTTP.
 * @returns {Promise<Response>} La respuesta HTTP con los datos de la película encontrada en formato JSON.
 */
const buscarPelicula = async (req, res) => {
    const titulo = await req.params.titulo;

    try {
        /**
       * Realizar una consulta a la base de datos utilizando el modelo Pelicula y el método findOne.
       * El método findOne() busca en todos los documentos en la colección asociada al modelo Pelicula.
       * Esta consulta devuelve una promesa que se resuelve con una lista de documentos que coinciden con los criterios de búsqueda.
       */
        const existe = await Pelicula.findOne({ titulo: titulo });

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
        };
        /**
     *Capturar y manejar posibles errores que puedan ocurrir durante la ejecución de la consulta o el renderizado de la vista.
     */
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contactar con el administrador"
        });
    };
};
/******************** AÑADIR PELÍCULA ********************/

/**
 * Método de controlador para crear una nueva película en la base de datos con función asíncrona.
 * @param {Request} req - Objeto de solicitud que contiene los datos de la solicitud, incluyendo los datos de la nueva película en el cuerpo de la solicitud.
 * @param {Response} res - Objeto de respuesta que se utilizará para enviar una respuesta HTTP.
 * @returns {Promise<Response>} La respuesta HTTP con los datos de la película creada en formato JSON.
 */
const crearPelicula = async (req, res) => {
    const peli = new Pelicula(req.body);

    try {
        /**
        * Realizar una consulta a la base de datos utilizando el modelo Pelicula y el método find.
        * El método find() busca en todos los documentos en la colección asociada al modelo Pelicula.
        * @param {string} titulo - El título de la película en la base de datos.
        * @returns {Promise<Array>} Una promesa que se resuelve con un array de peliculas que coinciden con el título.
        */
        const { titulo } = peli;
        const existe = await Pelicula.findOne({ titulo: titulo });

        if (existe) {
            return res.status(400).json({
                ok: false,
                msg: '¡Esta película ya existe en nuestra base!'
            });
        };

        const peliGuardada = await peli.save()
        return res.status(201).json({
            ok: true,
            pelicula: peliGuardada,
            msg: "Película añadida"
        });
        /**
            *Capturar y manejar posibles errores que puedan ocurrir durante la ejecución de la consulta o el renderizado de la vista.
            */
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contactar con el administrador Navarro"
        });
    };
};
/******************** ACTUALIZAR PELÍCULA ********************/

/**
 * Método de controlador para actualizar una película existente en la base de datos con función asíncrona.
 * @param {Request} req - Objeto de solicitud que contiene los datos de la solicitud, incluyendo el ID de la película a actualizar en los parámetros y los nuevos datos de la película en el cuerpo de la solicitud.
 * @param {Response} res - Objeto de respuesta que se utilizará para enviar una respuesta HTTP.
 * @returns {Promise<Response>} La respuesta HTTP con los datos de la película actualizada en formato JSON.
 */
const actualizarPelicula = async (req, res) => {
    const id = await req.params.id;

    try {
        /**
         * Realizar una consulta a la base de datos utilizando el modelo Pelicula y el método findByIdAndUpdate.
         * El método findByIdAndUpdate() busca en todos los documentos en la colección asociada al modelo Pelicula.
         * @param {string} id - El (_id) de la película que se va a modificar.
         * @param {Object} body - Los datos que se actualizarán en la película.
         * @param {Object} options - Opciones adicionales para la actualización. En este caso, se utiliza { new: true } para devolver la película modificada en vez de la original.
         * @returns {Promise<Document|null>} Una promesa que se resuelve con el documento de una película modificada o null si no existe.
         */
        const existe = await Pelicula.findOne({ _id: id });
        const peliModificada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (existe) {
            return res.status(200).json({
                ok: true,
                pelicula: peliModificada,
                msg: "Película actualizada"
            });
        };
        return res.status(400).json({
            ok: false,
            msg: "No hay películas con ese título"
        });
        /**
             *Capturar y manejar posibles errores que puedan ocurrir durante la ejecución de la consulta o el renderizado de la vista.
             */
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"
        });
    };
};
/******************** BORRAR PELÍCULA ********************/
/**
* Método de controlador para eliminar una película de la base de datos con función asíncrona.
* @param {Request} req - Objeto de solicitud que contiene los datos de la solicitud, incluyendo el ID de la película a eliminar en los parámetros.
* @param {Response} res - Objeto de respuesta que se utilizará para enviar una respuesta HTTP.
* @returns {Promise<Response>} La respuesta HTTP con un mensaje indicando que la película ha sido eliminada.
*/
const borrarPelicula = async (req, res) => {
    const id = await req.params.id;

    try {
        /**
        * Realizar una consulta a la base de datos utilizando el modelo Pelicula y el método findByIdAndDelete.
        * @method findByIdAndDelete
        * @param {string} id - El (_id) de la película que se desea elimnar.
        * @returns {Promise<Document|null>} Una promesa que se resuelve con el documento de una película eliminada o null si no existe.
        */
        const existe = await Pelicula.findByIdAndDelete(id);

        if (existe) {
            return res.status(200).json({
                ok: true,
                data: existe,
                msg: 'Película eliminada'
            });
        } else {
            return res.status(400).json({
                msg: "No hay películas con ese título"
            });
        };
        /**
     *Capturar y manejar posibles errores que puedan ocurrir durante la ejecución de la consulta o el renderizado de la vista.
     */
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: "Contacta con el administrador"
        });
    };
};
/**
 * Exportación de funciones
 */
module.exports = {
    obtenerPelicula,
    buscarPelicula,
    crearPelicula,
    actualizarPelicula,
    borrarPelicula
};