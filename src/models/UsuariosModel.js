const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

//nombre && estado && mail && genero && contraseña && dir || telefono
const UsuariosSchema = new Schema({

        nombre:{type:String},
        estado:{type:Number},
        mail:{type:String},
        genero:{type:String,enum:['Hombre','Mujer','Otro']},
        contraseña:{type:String},
        dir:{type:String},
        telefono:{type:Number},

});

UsuariosSchema.methods.encryptarPass = async (contraseña) =>{

        const salt = await bcrypt.genSalt(12);

        return bcrypt.hash(contraseña,salt)

};


module.exports = mongoose.model('Usuarios',UsuariosSchema)