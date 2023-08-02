const User = require('../models/UserMovie');
const bcrypt = require('bcryptjs')



//POST CREAR USER
const createUser = async (req, res) => {

    const { email, password, passConfirm, nombre,date } = req.body;

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
        
        const newUser = { email, nombre, password, date };
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
        console.log(error)

    }



}



//POST LOGIN USER
const loginUser = async (req, res) => {

}



//RENEW

const renewToken = async (req, res) => {

}


module.exports = {
    createUser,
    loginUser,
    renewToken
}
