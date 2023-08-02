const jwt = require('jsonwebtoken');

const generarJWT = (uid, nombre) => {

    return new Promise((resolve, reject) => {

        const payload = { uid, nombre };

        //GENERACIÓN DEL TOKEN

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '30m' },
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('Fallo al generar token');
                };
                resolve(token);
            });
    });
};

module.exports = {
    generarJWT
};