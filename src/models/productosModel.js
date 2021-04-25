const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductosSchema = new Schema({

        title:String,
        precio:Number,
        img:String,
        type:String,
        desc:String,
        cat:String,
        stock:Number,
        ventas:Number    

});

module.exports = mongoose.model('Productos',ProductosSchema)