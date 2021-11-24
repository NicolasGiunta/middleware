const fs = require ('fs');
const path = require('path');

const ruta = path.join(__dirname, "../logs/userLogs.txt");

function userLogs (req, res, next){
    fs.appendFileSync("userLogs.txt" ,  "El usuario ingreso a la ruta:" + req.url);

    next();
}




module.exports = userLogs;


