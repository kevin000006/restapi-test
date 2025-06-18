import express from 'express';
import cors from 'cors';
import actDatosRoutes from './routes/actualizar-datos.routes.js';
import aumentoCupoRoutes from './routes/aumento-cupo.routes.js';

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false, 
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

const ValidateHeaders=(req,res,next)=>{
    


    const authorizationHeader = req.headers['authorization'];
    const SantanderHeader = req.headers['x-santander-client-id'];
    if (!SantanderHeader || !authorizationHeader || !authorizationHeader.startsWith('Bearer ')){
        return res.status(503).json({message:'The server is currenty unable to handle the request.', request:req.headers,
            variables: {DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER}
        });
    }

    next();
};

app.use('/updDatos/api',ValidateHeaders,actDatosRoutes);
app.use('/actc/api',ValidateHeaders,aumentoCupoRoutes);
app.use((req,res,next)=>{
    return res.status(404).json({message:'Not found'});
});


app.listen(PORT); 




