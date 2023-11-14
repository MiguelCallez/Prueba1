const db= require('../../db/mysql');
const Tabla='Usuario';
function mostrarGen(){
    return db.mostrarGen(Tabla);
}

function mostrarUno(id){
    return db.mostrarUno(Tabla, id);
}

function Eliminar(body){
    return db.Eliminar(Tabla, body);
}
module.exports={
    mostrarGen,
    mostrarUno,
    Eliminar
}
