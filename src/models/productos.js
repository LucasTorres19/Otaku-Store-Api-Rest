const { ObjectID } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductosSchema = new Schema({

    producto:{

        title:String,
        precio:Number,
        img:Number,
        type:Number,
        desc:String,
        cat:String,
        stock:Number,
        ventas:Number
    }

});

module.exports = mongoose.model('Productos',ProductosSchema)