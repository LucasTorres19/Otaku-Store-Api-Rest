const mongoose = require('mongoose');
const ProductosModel = require('./../models/productosModel');
const Productos = mongoose.model('Productos')

exports.findAllProductos = function(req,res){

    Productos.find(function(err,Productos){
        if(err) return res.send(500,err.message);
        
        console.log('GET /productos');
        res.status(200).json(Productos)
    })
}

exports.FindById = function(req,res){

    Productos.findById(res.params.id , function(err,productos){
        if(err) return res.send(500,err.message);

        console.log('GET /productos/' + req.params.id);
        res.status(200).jsonp(productos);
    })
};

exports.AddProducto = function(req,res){

    console.log("POST");
    console.log(req.body);

    const producto = new Productos({
    
        
            title : req.body.title,
            precio: req.body.precio,
            img: req.body.img,
            type: req.body.type,
            desc: req.body.desc,
            cat: req.body.cat,
            stock: req.body.stock,
            ventas: req.body.ventas
        
    
    });

    producto.save(function(err,productos){
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(productos)
    })

};

exports.UpdateProductos = function(req,res){

    Productos.findById(req.params.id,function(err,productos){
        
        productos.title = req.body.title;
        productos.precio = req.body.precio;
        productos.img = req.body.img;
        productos.type = req.body.type;
        productos.desc = req.body.desc;
        productos.cat = req.body.cat;
        productos.stock= req.body.stock;
        productos.ventas = req.body.ventas;

        productos.save(function(err){
            if(err)return res.status(500).send(err.message);
            res.status(200).jsonp(productos);
        
        })


    })
}

exports.deleteProducto = function(req, res) {
 
        Productos.findById(req.params.id, function(err, productos) {
            productos.remove(function(err) {
                if(err) return res.status(500).send(err.message);
            res.status(200).send();
            })
        });
    };