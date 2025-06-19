import express from 'express';
import cors from 'cors';
import actDatosRoutes from './routes/actualizar-datos.routes.js';
import aumentoCupoRoutes from './routes/aumento-cupo.routes.js';
import {PORT} from './config.js';

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
    
    const SantanderHeader = req.headers['x-santander-client-id'];
    const context_id = req.headers['x-context-id'];
    const schema_id = req.headers['x-schema-id'];
    const terminal_id = req.headers['x-terminal-id'];
    const traceparent = req.headers['traceparent'];
    const tracestate = req.headers['tracestate'];
    const authorizationHeader = req.headers['authorization'];

    const headerValid = (!SantanderHeader || !context_id || !schema_id || !terminal_id
        || !traceparent || !tracestate || !authorizationHeader || !authorizationHeader.startsWith('Bearer ')
    );
    
    if (headerValid){
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




