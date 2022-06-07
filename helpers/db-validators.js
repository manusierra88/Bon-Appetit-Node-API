const Rol = require('../models/rol');
const Usuario = require('../models/user');
const Producto = require('../models/products');




const rolValido = async (rol = '') => {
    const rolExiste = await Rol.findOne({ rol });
    if (!rolExiste) {
        throw new Error(`El rol ${rol} no es válido`);
    }
}

const emailExiste = async (email = '') => {

    const correoExiste = await Usuario.findOne({ email });
    if (correoExiste) {
        throw new Error(`Èl correo ${correo} ya se encuentra registrado y/o en uso`);
    }

}


const idUsuarioExiste = async (id) => {
    const idExiste = await Usuario.findById(id);
    if (!idExiste) {
        throw new Error(`El ID ${id} no existe y/o no es válido`);
    }
}



const idProductoExiste = async (id) => {
    const idExiste = await Producto.findById(id);
    if (!idExiste) {
        throw new Error(`El id ${id}, no es correcto o no se encuentra en la base de datos`)
    }
}

const coleccionesPermtidas = (coleccion = '', colecciones = []) => {

    const incliuda = colecciones.includes(coleccion);

    if (!incliuda) {
        throw new Error(`La coleccioón ${coleccion} no está dentro de las colecciones guardadas en base de datos, (${colecciones})`)
    }

    return true;

}



module.exports = {
    rolValido,
    emailExiste,
    idUsuarioExiste,
    idProductoExiste,
    coleccionesPermtidas,

}