const {Schema, model}=require('mongoose');


const ProductShema = Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre del producto es requerido'],
    },
    
    precio:{
        type: Number,
        default:0
    },
    
    descripcion:{
        type: String,
    },
    
    img:{
        type: String
    },
    disponible:{
        type: Boolean,
        default:true,
    }
});

ProductShema.methods.toJson =  function(){
    const {__v, estado, ...data} = this.toObject();
    return data;
}

module.exports = model('Product', ProductShema);