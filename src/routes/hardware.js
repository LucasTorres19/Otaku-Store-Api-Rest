const {Router} = require("express")
const router = Router();


router.get('/api/Hardware', (req,res) =>{


    res.json({
        "title": "Ryzen 7",
        "precio": "62.000$",

    });

    
});


module.exports = router;

