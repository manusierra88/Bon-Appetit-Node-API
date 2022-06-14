
const {Router}= require('express');

const { crearProducto, obtenerProdcutos, modificarProducto, borrarProducto, obtenerProductoPorId } = require('../controllers/prooducts');
const { esAdmin } = require('../middlewares/validar-rol');
const { validarCampos } = require('../middlewares/validarCampos');
const validarJWT = require('../middlewares/validarJWT');

const router = Router();



router.post('/',[
    validarJWT,
    esAdmin,
    validarCampos],
    crearProducto);

router.get('/',obtenerProdcutos);

router.get('/:id',[validarJWT,validarCampos],obtenerProductoPorId);
 
router.put('/:id',[],modificarProducto);

router.delete('/:id',[validarJWT,esAdmin,validarCampos],borrarProducto);




module.exports = router;