require("babel-polyfill")
const app = require('./app');
require('./database')

app.listen(app.get('port'), ()=>{
    console.log(`Servidor abierto en el puerto ${app.get('port')}.`)
});
