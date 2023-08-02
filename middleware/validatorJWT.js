const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {

    const tok = req.header('x-token');

    if (!tok) {

        return res.status(401).json({
            ok: false,
            msn: "Not find token"
        });
    };

    try {

        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = payload.uid;
        req.nombre = payload.nombre;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    };
};


module.exports = { validarJWT };