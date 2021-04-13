const {Router} = require("express")
const router = Router();


router.get('/api/Libros', (req,res) =>{


    res.json({
        "title": "Batman Caballero de la noche 3",
        "precio": "600$",

    });

    
});


module.exports = router;