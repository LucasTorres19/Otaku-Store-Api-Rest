const {Router } = require("express");
const router = Router();
const connection = require("./../database/connect");
const { ObjectId } = require("bson");

router.get('/',async(req,res)=>{

    const db = await connection();
    
    db.collection('Usuarios').find({}).toArray(function(err, result) {
        if (err) throw err; 
        res.send(result);
    });

});

router.post('/',async(req,res)=>{

    const {nombre,estado,mail,telefono,dir,genero,contraseña} = req.body
    const db = await connection();

    if(nombre && estado && mail && genero && contraseña && dir || telefono){
        db.collection('Usuarios').insertOne(req.body);
        res.send("Registrado el usuario.")
    }
    else{
        res.send("Error al regristar.")
    }
});

router.put('/:id',async (req,res) =>{

    const db = await connection();
    const {nombre,estado,mail,telefono,dir,genero,contraseña} = req.body;
    const param = req.params

    if(nombre && estado && mail &&  telefono && dir && genero && contraseña){
      
        db.collection('Usuarios').updateOne({_id: ObjectId(param.id)}, {$set:req.body},{ upsert: true })
        res.send("Actualizado.")
    }
    else{
        res.send("no se pudo actualizar.")
    }
    
router.delete('/:id', async (req,res)=>{

    const db = await connection();
    const param = req.params
    db.collection('Usuarios').removeOne({_id: ObjectId(param.id)}) 
    res.send("Borrado")
    
    });

    
});


module.exports = router;