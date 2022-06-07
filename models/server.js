const express = require('express');
const cors = require('cors');
const { dbConnect } = require('../database/config');




class Server {

    constructor (){
        this.app = express();
        this.port = process.env.PORT;

        //paths

        this.authPath= '/api/auth';
        this.userPath = '/api/user';
        this.productPath= '/api/productos';
        this.orderPath = '/api/pedidos';

        //DB connect

        this.connectDB();

        //middlewares

        this.middlewares();

        //routes

        this.routes();

        //cors

    }


    async connectDB(){
        await dbConnect();
    }

    middlewares(){
        const whiteList= ['http://localhost:3000']

        this.app.use(express.static('public'));

        this.app.use(express.json());

        this.app.use(cors({origin:whiteList}));
    }


    routes(){

        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.userPath, require('../routes/user'));
        this.app.use(this.productPath,require('../routes/products'));
        this.app.use(this.orderPath, require('../routes/pedidos'));

    }


    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en puerto ', this.port);
        })
    }

}

module.exports = Server;