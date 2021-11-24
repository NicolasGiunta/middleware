const fs = require ('fs')
const path = require ('path')
const adminPath = path.join(__dirname, '../data/dataBase.json');
const admins = JSON.parse(fs.readFileSync (adminPath, 'utf-8') );

let adminMiddlewares = (req, res, next) =>{
    for(let i=0; i< admins.length; i++){
    if(admins[i].nombre ==req.query.string){
        res.send('bienvenido' + admins[i].nombre);
    }else{
        res.send('no tenes privilegios')
    }
           console.log(admins.nombre) 
}
        next()
}



console.log(admins.length);
module.exports = adminMiddlewares;