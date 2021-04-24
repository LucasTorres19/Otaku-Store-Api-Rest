const { Router } = require("express");
const router = Router();

router.get('/',async (req,res) =>{
    res.send("Esta en la Api de Otaku Otore >:(")
})


module.exports = router;