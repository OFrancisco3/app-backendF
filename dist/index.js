"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configucarion del archivo .env 
dotenv_1.default.config();
//crear aplicacion express
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//Definiendo la primera tura de la aplicacion
app.get('/', (req, res) => {
    // Send hello world
    res.send('Welcome to API Resful App Express + TS + Nodemon+Jest +Swagger + Mongoose');
});
//Definiendo la primera tura de la aplicacion
app.get('/hello', (req, res) => {
    // Send hello world
    res.send('Welcome to GET route: hello');
});
//Execute App and listen requests to PORT
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map