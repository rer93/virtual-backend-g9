import express, {json} from 'express';
import morgan from "morgan";
import { actividades_router } from '../routes/actividades'; 



export class Server {
    constructor(){
        this.app = express();
        this.puerto = 8000;
        this.bodyParser();
        this.rutas();
        
    }

    bodyParser(){
        // sirve para indicar en el proyecto que formatos (bodyes) me puede neviar el front(cliente)
        this.app.use(json());
    }

    rutas(){
        // agregamos el middleware de moragn para haga tracking a todas las consultas al backend
        this.app.use(morgan("dev"));
        this.app.use(actividades_router);

        this.app.get('/',(req, res)=>{
            // req => Request => la info que me envia el cliente
            // res => Response => la info que le voy a devolver al cliente
            res.status(200).send("Bienvenido a mi API")
        });
    }
    start(){
        this.app.listen(this.puerto, ()=>{console.log(`Servidor corriendo en el puerto ${this.puerto}`);})
            
    };
}





// export const x = 10;
// const x = 10;

// module.exports = {
//     x: x,
// };