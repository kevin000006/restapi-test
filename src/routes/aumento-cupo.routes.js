import {Router} from 'express';
import {getFlujoPaso,getDataIinitContext, getDocumentRASE,getDataConfirmacion} from '../controllers/aumento-cupo.controller.js';

const router = Router();




router.get('/Customer_Offer/Card_Limit_Increase_Request/v1/campaigns/:id',async (req,res)=>{
    const [response] = await getFlujoPaso(1);

     setTimeout(() => {
        if(response.esExitoso == 1){
                res.status(200).json(getDataIinitContext);
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

router.post('/Customer_Offer/Card_Limit_Increase_Request/v1/document-rase', async(req,res)=>{
 
     const [response] = await getFlujoPaso(2);

     setTimeout(() => {
        if(response.esExitoso == 1){
                res.status(200).json({
                    document: getDocumentRASE.documento
                });
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

router.post('/Customer_Offer/Card_Limit_Increase_Request/v1/generate-challenge', async(req,res)=>{

     const [response] = await getFlujoPaso(3);

     setTimeout(() => {
        if(response.esExitoso == 1){
                res.status(200).json({
                    challenge: "desafio activo"
                });
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

router.post('/Customer_Offer/Card_Limit_Increase_Request/v1/validate-challenge', async(req,res)=>{

     const [response] = await getFlujoPaso(4);

     setTimeout(() => {
        if(response.esExitoso == 1){
                res.status(200).json(getDataConfirmacion);
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