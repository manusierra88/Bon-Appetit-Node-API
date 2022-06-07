const bcryptjs = require('bcryptjs');
const crearJWT = require('../helpers/jwt-creator');

const Usuario = require('../models/user');



const login = async (req, res) => {
    const { email, password } = req.body;

    try {

        const user = await Usuario.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: 'Error: correo/contraseña incorrecto'
            });
        }

        // if(!user.rol !== 'ADMIN_ROL'){
        //     return res.status(400).json({
        //         msg: 'Rol inválido, no tiene acceso'
        //     });
        // }

        if (user.estado == false) {
            return res.status(400).json({
                msg: 'Usuario sin permiso de acceso, contacte al desarrollador'
            });
        }
        const valisPassword = bcryptjs.compareSync(password, user.password);
        if (!valisPassword) {
            return res.status(400).json({
                msg: 'Error: correo/contraseña incorrecto'
            });
        };

        const token = await crearJWT(user.id);

        res.status(200).json({
            msg: 'Petición exitosa',
            user,
            token
        })

    } catch (error) {
        console.log(error);
        if(error){
            return res.status(500).json({
                msg: 'Error, comuniquese con el desarrollador'
            })
        }

    }
}


module.exports = {
    login
}