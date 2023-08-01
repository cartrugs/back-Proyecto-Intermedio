const User = require('../models/userMovie');
const bcrypt = require('bcryptjs')



//POST CREAR USER
const createUser = async (req,res) => {

    const {user, password , nombre} = req.body

    try {
        
    } catch (error) {
        let user = await User.findOne({user:user});
        console.log(user)
        
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


