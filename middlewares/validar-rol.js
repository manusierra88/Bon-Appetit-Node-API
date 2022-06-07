const {request, response} = require('express');
const Rol = require('../models/rol');


const esAdmin = (req = request, res= response, next) =>{
    //verificar un usuario valido
    if(!req.user){
        return res.status(500).json({
            msg : 'Usuario invalido o sin registro en DB'
        });
    }

    const {rol, nombre } = req.user;

    if(rol !== 'ADMIN_ROL'){
        res.status(401).json({
            msg: `El usuario ${nombre}, no posee autorización para realizar dicha petición`
        });
    }

    next();
}


const tieneRol = async(req, res, next)=>{
    
        if(!req.user){
            return res.status(500).json({
                msg : 'Usuario invalido o sin registro en DB'
            });
        }

        if(!rol.includes(req.user.rol)){
            return res.status(401).json({
                msg : `El usuario ${nombre}, no posee un rol valido para dicha petición`
            });
        }

        next();
    }



module.exports = {
    esAdmin,
    tieneRol
}

