const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const UsuariosModel = require('./../models/UsuariosModel')
const UsuarioModel = mongoose.model('Usuarios')

exports.findAllUsuarios = function(req,res){

    UsuarioModel.find(function(err,usuarios){
        if(err) return res.send(500,err.message);
        
        console.log('GET /usuarios');
        res.status(200).json(usuarios)
    })
}

exports.FindById = function(req,res){

    UsuarioModel.findById(res.params.id , function(err,usuarios){
        if(err) return res.send(500,err.message);

        console.log('GET /usuarios/' + req.params.id);
        res.status(200).jsonp(usuarios);
    })
};

exports.AddUser = async function (req,res){

    console.log("POST");
    console.log(req.body);

    const usuario = new UsuarioModel({
    
        nombre:req.body.nombre,
        estado:req.body.estado,
        mail:req.body.mail,
        genero:req.body.genero,
        contraseña:req.body.contraseña,
        dir:req.body.dir,
        telefono:req.body.telefono

    });

    usuario.contraseña = await usuario.encryptarPass(usuario.contraseña);

    const token = jwt.sign({id: usuario._id},'miami');

     usuario.save(function(err,usuarios){
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp({auth:true,token})
    })

};

exports.UpdateUsuario = function(req,res){

    UsuarioModel.findById(req.params.id,function(err,usuarios){
        
        usuarios.nombre = req.body.nombre;
        usuarios.estado = req.body.estado;
        usuarios.mail = req.body.mail;
        usuarios.genero = req.body.genero;
        usuarios.contraseña = req.body.contraseña;
        usuarios.dir = req.body.dir;
        usuarios.telefono= req.body.telefono;

        usuarios.save(function(err){
            if(err)return res.status(500).send(err.message);
            res.status(200).jsonp(usuarios);
        
        })


    })
}

exports.deleteUsuario = function(req, res) {
 
        UsuarioModel.findById(req.params.id, function(err, usuarios) {
            usuarios.remove(function(err) {
                if(err) return res.status(500).send(err.message);
            res.status(200).send();
            })
        });
    };