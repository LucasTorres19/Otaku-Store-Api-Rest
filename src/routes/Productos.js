const {Router} = require("express");
const router = Router();
const connection = require("../connectdb");
const { ObjectId } = require("bson");

router.get('/', async (req,res) =>{ 

    const db = await connection();
    
    const result = await db.collection('Productos').find({}).toArray();
    res.json(result)
  
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

