const express = require('express');
const respuesta= require('../../red/respuesta');
const controlador= require('./controlador');
const router = express.Router();

router.get('/', async function(req,res){
    const items=await controlador.mostrarGen();
        respuesta.success(req,res,items,200);
});

router.get('/:id', async function(req,res){
    try{
    const items=await controlador.mostrarUno(req.params.id);
        respuesta.success(req,res,items,200);
    }catch(err){
        respuesta.error(req,res,err,500);
    }
});

router.put('/', async function(req,res){
    try{
    const items=await controlador.Eliminar(req.body);
        respuesta.success(req,res,'eliminado',200);
    }catch(err){
        respuesta.error(req,res,err,500);
    }
});

module.exports=router;