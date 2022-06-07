const { Schema, model} = require('mongoose');

const PedidoSchema = Schema({
    
    producto:{
        type: String 
    },
    fechaPedio:{
        type: Date,
    },
    estado:{
        type: Boolean,
        default: true,
    },
    cantidad:{
        type: Number,
        required: [true, 'La cantidad debe ser especificada'],
    },
    telefono:{
        type:Number
    }
    
})


module.exports = model('Pedido', PedidoSchema);


