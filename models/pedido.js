const { Schema, model} = require('mongoose');

const PedidoSchema = Schema({
    nombre:{
        type: String
    },
    email:{
        type: String
    },
    producto:{
        type: String 
    },
    fechaPedio:{
        type: Date,
        default: Date.now()
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


