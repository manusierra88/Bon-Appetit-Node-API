const { Router } = require('express');
const { check } = require('express-validator');


const { login } = require('../controllers/auth');
const { esAdmin, tieneRol } = require('../middlewares/validar-rol');
const { validarCampos } = require('../middlewares/validarCampos');
const {validarJWT}= require('../middlewares/validarJWT');




const router = Router();


router.post('/login', [
    check('email', 'Correo inválido').isEmail(),
    check('password', 'La contraseña debe ser ingresada').not().isEmpty(),
    validarCampos],
    login)


module.exports = router;