const {Router} = require("express")
const router = Router();


router.get('/api/Figuras',(req,res) => {

        res.json({
        "title":"Rem tamaño real",
        "precio":"5.000$"
    });

    });

module.exports = router;