const jwt = require('jsonwebtoken');


const crearJWT = (uid= '')=>{
    return new Promise((resolve, reject)=>{
        const payload = {uid};

        jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1d'},(error, token)=>{
            if(error){
                console.log(error);
                reject('No se pudo crear el token');
            }else{
                resolve(token);
            }
        })
    
    })
}


module.exports= crearJWT;