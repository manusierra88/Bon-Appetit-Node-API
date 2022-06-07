const { Router } = require('express');
const { userPost, userPut } = require('../controllers/user');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validarCampos')

const { emailExiste, rolValido, idUsuarioExiste } = require('../helpers/db-validators');



const router = Router();



router.post('/', [
    check('email', 'El correo ingresado no es válido').isEmail(),
    check('email').custom(emailExiste),
    check('nombre', 'Ingresar el nombre').not().isEmpty(),
    check('password', 'La contraseña debe tener 6 caracteres como mínimo').isLength({ min: 6 }),
    validarCampos
], userPost);



router.put('/:id', [
    check('id', 'El id no es válido').isMongoId(),
    check('id').custom(idUsuarioExiste),
    check('rol').custom(rolValido),
    validarCampos
], userPut);


module.exports = router;