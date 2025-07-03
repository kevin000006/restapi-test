import {Router} from 'express';
import {getContextSesion} from '../controllers/updDatos.controller.js'; 

const router = Router();

router.get('/v1/data-contact',async (req,res)=>{
    const [response] = await getFlujoPaso(1);
     setTimeout(() => {
        if(response.esExitoso == 1){
                res.status(200).json(response.resultado);
        }else{
            res.status(500).json({
                code: 500,
                message: "Internal Server Error",
                level: "Error",
                description: "An unexpected error occurred oan the server."
            });
        }
    },response.timeOut);
    
});

router.post('/v1/generate-challenge', async(req,res)=>{

     const [response] = await getFlujoPaso(2);

     setTimeout(() => {
        if(response.esExitoso == 1){
                res.status(200).json(response.resultado);
        }else{
            res.status(500).json({
                code: 500,
                message: "Internal Server Error",
                level: "Error",
                description: "An unexpected error occurred oan the server."
            });
        }
    },response.timeOut);

});

router.post('/v1/validate-challenge', async(req,res)=>{

     const [response] = await getFlujoPaso(3);

     setTimeout(() => {
        if(response.esExitoso == 1){
                res.status(200).json(response.resultado);
        }else{
            res.status(500).json({
                code: 500,
                message: "Internal Server Error",
                level: "Error",
                description: "An unexpected error occurred oan the server."
            });
        }
    },response.timeOut);

});





export default router;