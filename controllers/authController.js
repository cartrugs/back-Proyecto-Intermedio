const User = require('../models/UserMovie');
const bcrypt = require('bcryptjs')



//POST CREAR USER
const createUser = async (req,res) => {

 const {user,password,nombre} = req.body;

 try {
    let user = await User.findOne({user:user});
    console.log(user);

    if(user) {
        return res.status(400).json({
            ok:false,
            msg:'Ya existe usuario'
        });
    }
    user = new User(req.body)

    //condicion para confirmar contrasena

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password,salt)

 } catch (error) {
    
 }



}



//POST LOGIN USER
const loginUser = async (req,res) => {

}



//RENEW

const renewToken = async (req,res) => {

}


module.exports = {
    createUser,
    loginUser,
    renewToken
}
