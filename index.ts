import express, { Express, Request, Response } from "express"; 
import dotenv from 'dotenv'

//configucarion del archivo .env 
dotenv.config();

//crear aplicacion express
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

//Definiendo la primera tura de la aplicacion
app.get('/',(req: Request,res: Response)=>{
    // Send hello world
    res.send('Welcome to API Resful App Express + TS + Nodemon+Jest +Swagger + Mongoose')
});

//Definiendo la primera tura de la aplicacion
app.get('/hello',(req: Request,res: Response)=>{
    // Send hello world
    res.send('Welcome to GET route: hello')
});

//Execute App and listen requests to PORT
app.listen(port, ()=>{
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})