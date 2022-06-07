const { request, response } = require('express');
const jwt = require('jsonwebtoken');


const Usuario = require('../models/user');


const validarJWT = async (req= request, res= response, next)=>{
    const token = req.header('token');

    if(!token){
        return res.status(401).json({
            msg: 'No hay token y/o es inválido'
        });
    }

    try {
        const {uid}= jwt.verify(token, process.env.SECRET_KEY)
        const user = await Usuario.findById(uid);
        if(!user){
            return res.status(400).json({
                msg: 'El usuario no tiene un token válido'
            });
        }
        if(!user.estado){
            return res.status(400).json({
                msg:'Usuario sin acceso, comunicarse con el desarrollador'
            });
        }

        req.user= user;
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token inválido'
        });
    }
}


module.exports = validarJWT;