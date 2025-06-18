import {Router} from 'express';
import {getFlujoPaso} from '../controllers/aumento-cupo.controller.js';

const router = Router();




router.get('/Customer_Offer/Card_Limit_Increase_Request/v1/campaigns/:id',async (req,res)=>{
    const [response] = await getFlujoPaso(1);

    const dataResult ={
        userId: "00756525689",
        contract: "000000000000411",
        companyId: "00713685691",
        role: 4,
        userName: "Diego Arellano Reyes",
        companyName: "Servicio Agricola Ltda.",
        cardholderName: "**** **** **** 0617",
        cardUserName: "Diego A. Reyes",
        cardNumber: "1234 4321 5698 0617",
        currentQuota: "300",
        minimumQuota: "100",
        maximumQuota: "500"
    };

     setTimeout(() => {
        if(response.esExitoso == 1){
                res.status(200).json(dataResult);
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