const {Schema, model}= require('mongoose');


const RolSchema = Schema({
    rol:{
        type: String,
        required: [true, 'El rol es un campo obligatorio'],
        default: 'GUEST_ROL'
    }
});

module.exports = model('role', RolSchema);