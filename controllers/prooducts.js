const { request, response } = require('express');
const Producto = require('../models/products');

const crearProducto = async (req = request, res= response)=>{
        const {nombre, precio, descripcion} = req.body;
        
        if(!nombre){
            return res.status(400).json({
                msg: 'Ingrese el nombre del producto'
            });
        }

        const producto = new Producto({nombre,precio,descripcion});

        await producto.save();

        res.status(201).json({
            msg: 'Producto agregado correctamente a la base de datos',
            producto
        });

}

const obtenerProdcutos= async (req, res) =>{
    const [productos] = await Promise.all(
        [Producto.find()]
    )
    res.json(
        productos
    );
}

const obtenerProductoPorId = async (req, res)=>{
    const {id} = req.params;

    const producto = await Producto.findById(id);

    res.json(producto);


}


const modificarProducto = async (req = request, res ) =>{
    const id = req.params.id
    const {nombre, precio, descripcion}= req.body;


    try {
        const producto = await Producto.findById(id);
        if(!producto){
            return res.status(404).json({
                msg:'Producto no encontrado'
            })
        }

        const productoActualizado = await Producto.findByIdAndUpdate(id, {nombre, precio, descripcion},{new:true});
       
        res.status(201).json({
            msg:'Producto actualizado correctamente',
            producto : productoActualizado
        })
    
        
    } catch (error) {
        console.log(error);
        res.json(error);
        
    }

    
    

   }

const borrarProducto = async (req, res) =>{
    const id = req.params.id;
    const producto = await Producto.findById(id);
    if(!producto){
        res.staus(404).json({
            msg:'producto no econtrado'
        })
    }
    await Producto.findByIdAndDelete(id);
    res.json({
        ok: true
    })

  }




module.exports = {
    crearProducto,
    modificarProducto,
    borrarProducto,
    obtenerProdcutos,
    obtenerProductoPorId
}