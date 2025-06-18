import express from 'express';
import actDatosRoutes from './routes/actualizar-datos.routes.js';
import aumentoCupoRoutes from './routes/aumento-cupo.routes.js';
import {PORT} from './config.js'

const app = express();

app.use(express.json());

const ValidateHeaders=(req,res,next)=>{
    
    const authorizationHeader = req.headers['authorization'];
    const SantanderHeader = req.headers['x-santander-client-id'];
    if (!SantanderHeader || !authorizationHeader || !authorizationHeader.startsWith('bearer ')){
        return res.status(503).json({message:'The server is currenty unable to handle the request.'});
    }

    next();
};

app.use('/updDatos/api',ValidateHeaders,actDatosRoutes);
app.use('/actc/api',ValidateHeaders,aumentoCupoRoutes);
app.use((req,res,next)=>{
    return res.status(404).json({message:'Not found'});
});


app.listen(PORT); 




