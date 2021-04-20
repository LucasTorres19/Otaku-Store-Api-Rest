const {Router} = require("express");
const router = Router();
const connection = require("./../database/connect");
const { ObjectId } = require("bson");

router.get('/', async (req,res) =>{ 

    const db = await connection();
    
    db.collection('Productos').find({}).toArray(function(err, result) {

        if (err) throw err; 
        res.send(result);
    });
  
});

router.post('/',async (req,res)  =>{

    const {title,precio,img,type,desc,cat,stock,ventas} = req.body 

    const db = await connection();
    
    //verificando que existen las varibles.
    
    if(title && precio && img && type && desc && cat && stock && ventas){
    
        db.collection('Productos').insertOne(req.body);

        res.send("Guardado");
    }
    else{
        res.send("Error al Cargar.");
    }
    
});

router.put('/:id',async (req,res) =>{

    const db = await connection();
    const {title,precio,img,type,desc,cat,stock,ventas} = req.body;
    const param = req.params

    if(title && precio && img && type && desc && cat && stock && ventas){
      
        db.collection('Productos').updateOne({_id: ObjectId(param.id)}, {$set:req.body},{ upsert: true })
        res.send("Actualizado.")
    }
    else{
        res.send("Error al actualizar el producto.")
    }

});

router.delete('/:id', async (req,res)=>{

    const db = await connection();
    const param = req.params
    db.collection('Productos').removeOne({_id: ObjectId(param.id)}) 
    res.send("Borrado")
});

module.exports = router;

