const User = require('../models/UserMovie');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');

//POST CREAR USER
const createUser = async (req, res) => {

    const { email, password, passConfirm, nombre, role, date } = req.body;

    try {
        let user = await User.findOne({ email: email });
        console.log(user);

        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe usuario'
            });
        };

        if (password != passConfirm) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no coincide'
            })
        };

        const newUser = { email, nombre, password, role, date };
        user = new User(newUser)


        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)

        const saveUser = await user.save()
        console.log(saveUser)

        return res.status(201).json({
            ok: true,
            data: saveUser,
            msg: "User guardado"
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Consulta con el admin Navarro'
        });
    };
};

//POST LOGIN USER
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese usuario no existe'
            });
        };
        let passOk = await bcrypt.compare(password, user.password)

        if (!passOk) {
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña no coincide'
            });
        };
        const token = await generarJWT(user.id, user.nombre);
        res.status(200).json({
            ok: true,
            uid: user.id,
            nombre: user.nombre,
            email: user.email,
            token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Consulta con el admin Navarro'
        })

    };
};

//RENEW
const renewToken = async (req, res) => {

};


module.exports = {
    createUser,
    loginUser,
    renewToken
}
