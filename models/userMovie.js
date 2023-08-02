const {Schema,model} = require('mongoose');

const userSchema = new Schema ({
    email: {
        type:String,
        required:true,
        unique:true
    },
    nombre: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    // type: {
    //     type:String,
    // },
    date: {
        type:Date,
        default:Date.now
      }
});

module.exports=model('User',userSchema)

