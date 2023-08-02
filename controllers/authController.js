const User = require('../models/UserMovie');
const bcrypt = require('bcryptjs')



//POST CREAR USER
const createUser = async (req,res) => {

 const {user,password,password2,nombre} = req.body;

 try { 
    //TODO LIST 
    // let user = await User.findOne({user:user});
    // console.log(user);

    // if(user) {
    //     return res.status(400).json({
    //         ok:false,
    //         msg:'Ya existe usuario'
    //     });
    // }

    //condicion para confirmar contrasena
    // const newUser = {
    //     user,password,nombre
    // }
    // user = new User(newUser)
    //fin de la condicional


    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password,salt)

    const saveUser = await user.save()
    console.log(saveUser)

    return res.status(201).json({
        ok:true,
        data: saveUser,
        msg: "User guardado"
    })

 } catch (error) {
    console.log(error)
    
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
