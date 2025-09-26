import {Router} from 'express';
import {getFlujoPaso, getDocumentRASE} from '../controllers/aumento-cupo.controller.js';

const router = Router();




router.get('/Customer_Offer/Card_Limit_Increase_Request/v1/campaigns/:id',async (req,res)=>{
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

router.post('/Customer_Offer/Card_Limit_Increase_Request/v1/validate-challenge', async(req,res)=>{

     const [response] = await getFlujoPaso(4);

     setTimeout(() => {
        if(response.esExitoso == 0){
             res.status(500).json({
                code: 500,
                message: "Internal Server Error",
                level: "Error",
                description: "An unexpected error occurred oan the server."
            });
        }else{
            let jsonRespuesta = {};
            let ValidateStatus = '';

            if(response.esExitoso == 1){
                console.log(response.resultado);
                response.resultado['documentVoucher'] = getDocumentRASE.documento;
                jsonRespuesta = response.resultado;

                ValidateStatus = 'CONFIRM';
                res.status(200);
            }else if(response.esExitoso == 2) // CANCELED_CHALLENGE
            {
                ValidateStatus = 'CANCELED_CHALLENGE';
                res.status(204);
            }
            else if(response.esExitoso == 3) //NOT_AVAILABLE_YET
            {
                ValidateStatus = 'NOT_AVAILABLE_YET';
                res.status(204);
            }
            res.set('ValidateStatus',ValidateStatus);
            res.json(jsonRespuesta);
        }
    },response.timeOut);

});



export default router;