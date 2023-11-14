const mysql = require('mysql');
const config = require('../config');
const { error } = require('../red/respuesta');

const dbConfig={
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
}
let conexion;

function conmysql(){
    conexion= mysql.createConnection(dbConfig);
    conexion.connect((err)=> {
        if(err){
            console.log('[db err]', err);
            setTimeout(conmysql,200);
        }else{
            console.log('DB conectada')
        }
    });
    conexion.on('error', err=>{
        console.log('[db err]', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            conmysql();
        }else{
            throw err;
        }
    })
}
conmysql();

function mostrarGen(tabla){
    return new Promise((resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla}`,(error,result)=>{
            if(error)return reject(error);
            resolve(result);
        })
    });

}
function mostrarUno(tabla,id){
    return new Promise((resolve, reject)=>{
        conexion.query(`SELECT * FROM ${tabla} WHERE id=${id}`,(error,result)=>{
            if(error)return reject(error);
            resolve(result);
        })
    });
}

function Agregar(tabla,datos){

}

function Eliminar(tabla, data){
    return new Promise((resolve, reject)=>{
        conexion.query(`DELETE * FROM ${tabla} WHERE id=?`,data.id,(error,result)=>{
            if(error)return reject(error);
            resolve(result);
        })
    });
}

module.exports={
    mostrarGen,
    mostrarUno,
    Agregar,
    Eliminar,
}