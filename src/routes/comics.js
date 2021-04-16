const {Router} = require("express")
const router = Router();
const connection = require("./../database/connect");

router.get('/', async (req,res) =>{

    const db = await connection();
    
    db.collection('Comics').find({}).toArray(function(err, result) {
     
        if (err) throw err; 
        res.send(result);
    });
  
});

router.post('/',async (req,res)  =>{

    const {title , precio , img} = req.body

    const db = await connection();
    
    db.collection('Comics').insertOne(req.body);

    res.send("Guardado")

});

module.exports = router;

