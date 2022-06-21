const {Router} = require('express');
const { crearPedido, obtenerPedidos, editarPedido, borrarPedido } = require('../controllers/pedidos');
const { esAdmin } = require('../middlewares/validar-rol');
const { validarCampos } = require('../middlewares/validarCampos');
const validarJWT = require('../middlewares/validarJWT');


const router = Router();




router.post('/',crearPedido);

router.get('/',[validarJWT,esAdmin,validarCampos],obtenerPedidos)

router.put('/:id',[validarJWT,validarCampos], editarPedido)

router.delete('/:id',[validarJWT,validarCampos],borrarPedido)




module.exports= router;