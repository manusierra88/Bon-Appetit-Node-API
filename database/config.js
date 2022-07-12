const mongoose = require('mongoose');


const dbConnect = async () => {

    try {

        await mongoose.connect('mongodb+srv://bon_apetit:2Ou6jXA9oiWC3jAT@clustercursonodejs.4cevt.mongodb.net/baDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB conectada correctamente');

    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar la DB');
    }

}



module.exports = {
    dbConnect
};