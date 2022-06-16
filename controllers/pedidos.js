
const Pedido = require('../models/pedido');
const Producto = require('../models/products');
const Usuario = require('../models/user');


const crearPedido = async (req, res) => {

    const {nombre, email, telefono, producto, cantidad} = req.body;

    if (!telefono || telefono.length < 4) {
        return res.status(400).json({
            msg: 'El número telefónico no fue ingresado o no es un número válido'
        })
    }
    // const productoSeleccionado = await Producto.findOne({producto});
    // if(!productoSeleccionado){
    //     return res.status(400).json({
    //         msg:'Producto no encontrado en la base de datos, ingrese correctamente el nombre'
    //     });
    // }
    if (cantidad < 1) {
        return res.status(400).json({
            msg: 'La cantidad seleccionada no puede ser menor a 1'
        });
    }

    const pedido = new Pedido({ nombre, telefono, email, producto, cantidad });

    await pedido.save();

    res.status(200).json({
        msg: 'Pedido generado correctamente',
        pedido
    });

}

const obtenerPedidos = async (req, res) => {
    const [pedidos] = await Promise.all(
        [Pedido.find()]
    ); 
    res.json(
        {pedidos})
}



module.exports = {
    crearPedido,
    obtenerPedidos,
}