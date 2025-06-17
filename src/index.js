import express from 'express';
import actDatosRoutes from './routes/actualizar-datos.routes.js';
import {PORT} from './config.js'

const app = express();

app.use(actDatosRoutes);


app.listen(PORT);




