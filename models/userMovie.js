const {Schema,model} = require('mongoose');

const userSchema = new Schema ({
    user: {
        type:String,
        required:true,
        unique:true
    },
    nombre: {
        type:String,
        required:true
    },
    password: {
        type:Number,
        required:true
    },
    type: {
        type:String,
    },
    date: {
        type:Date,
        default:Date.now
      }
});

module.exports=model('user',userSchema)

