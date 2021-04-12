const {Router} = require("express")
const router = Router();


router.get('/api/mangas',(req,res) => {

        res.json({
        "title":"spider-man",
        "precio":"5.000$"
    });

        res.json(data);
    });

module.exports = router;