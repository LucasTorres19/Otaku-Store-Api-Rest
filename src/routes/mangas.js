const {Router} = require("express")
const router = Router();


router.get('/api/Mangas',(req,res) => {

        res.json({
        "title":"Naruto",
        "precio":"5.000$"
    });

    });

module.exports = router;