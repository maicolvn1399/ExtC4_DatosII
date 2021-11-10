const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioScheme = new Schema({
    name:{
        type: String
    },
    lastName:{
        type: String
    },
    age:{
        type:Number
    },
    code:{
        type:Number
    },
    country:{
        type:String
    }
});

const Usuario = mongoose.model('usuarios',UsuarioScheme);

module.exports = Usuario;