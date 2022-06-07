
const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/user');


const userPost = async (req, res) => {
    const { nombre, password, email, telefono } = req.body;

    const user = new Usuario({ nombre, password, email, telefono });

    const satl = bcryptjs.genSaltSync();

    user.password = bcryptjs.hashSync(password, satl);

    //guardamos en DB

    await user.save();

    res.status(201).json({
        msg: 'Petición creada exitosamente',
        user,
    });
}
const userPut = async (req, res) => {
    const id = req.params.id;
    const { password, email, ...data } = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync();
        data.password = bcryptjs.hashSync(password, salt);
    }
    const user = await Usuario.findByIdAndUpdate(id, data);
    res.status(201).json({
        msg: 'Campos de usuario actualizados',
        user,
    });

}


module.exports = {
    userPost,
    userPut,
}