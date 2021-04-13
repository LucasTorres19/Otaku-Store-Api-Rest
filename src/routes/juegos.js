const {Router} = require("express")
const router = Router();


router.get('/api/Juegos',(req,res) => {

        res.json({
        "title":"Left for dead",
        "precio":"5.000$"
    });

    });

module.exports = router;