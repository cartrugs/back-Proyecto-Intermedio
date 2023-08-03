/** Requerimiento de Mongoose */
const mongoose = require('mongoose');
/**
 * Función que se encarga de conectar a la base de datos utilizando Mongoose.
 * @async
 * @function dbConnect
 * @returns {Promise<object>} Una promesa que se resuelve con un objeto que indica el resultado de la conexión.
 * Si la conexión es exitosa, el objeto contendrá información sobre la conexión.
 * Si hay un error durante la conexión, el objeto contendrá una propiedad 'ok' con valor 'false' y una propiedad 'msg' con un mensaje de error indicando lo ocurrido.
 */
const dbConnect = async () => {
    try {
        /**
         * Se intenta conectar con la base de datos utilizando mongoose y la URI proporcionada en la variable de entorno: (process.env).
        */
        const res = await mongoose.connect(process.env.URI_DB);
        /**
         * Si la conexión es exitosa, se imprime este mensaje por consola.
        */
        console.log('Conectado a la bbdd')
        return res
    } catch (error) {
        /**
          * Si hay un error durante la conexión, devuelve un objeto con las propiedades: 'ok' y 'msg' indicando el error.
          */
        return {
            ok: false,
            msg: 'Error al conectar la bbdd'
        };
    };
};
/** 
 * Exporta la función dbConnect para que pueda ser utilizada en otros archivos.
*/
module.exports = { dbConnect };