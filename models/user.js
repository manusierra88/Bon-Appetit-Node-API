
const {Schema, model } = require('mongoose');


const UserSchema = Schema({
    nombre:{
        type: String,
        requred:[true, 'El nombre del ususario es un campo obligatorio'],
    },

    email:{
        type: String,
        required : [true, 'El correo/mail es un campo obligatorio'],
        unique: true //con esto hacemos que otro usuario con el mism mail no puedoa registrarse
    },
    password:{
        type:String,
        required:[true, 'La contraseña debe ser ingresada'],
    },
    rol:{
        type: String,
        enum: ['ADMIN_ROL','GUEST_ROL'],
        default: 'GUEST_ROL',
    },
    estado:{
        type: Boolean,
        default: true,
    },
    telefono:{
        type: String,
        
    }

});

UserSchema.methods.toJSON = function(){
    const {__v, password, _id, ...user} = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', UserSchema);