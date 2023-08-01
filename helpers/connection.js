const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        const res = await mongoose.connect(process.env.URI_DB);
        console.log('Conectado a la bbdd')
        return res
    } catch (error) {
        return {
            ok: false,
            msg: 'Error al conectar la bbdd'
        }
    }
}
module.exports = {dbConnect};