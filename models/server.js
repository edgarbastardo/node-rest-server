const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';

        //middlewares
        this.middleware();

        // Lectura y posteo del body
        this.app.use(express.json());

        //rutas de mi aplicación
        this.routes();

    }

    middleware() {

        //CORS
        this.app.use(cors());

        //Directorio público
        this.app.use(express.static('public'));


    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor sirviendo en el puerto', this.port);
        });

    }

}

module.exports = Server;