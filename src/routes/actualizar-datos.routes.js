import {Router} from 'express';

const router = Router();

router.get('/v1/data-contact',(req, res)=>{

    res.json({
        "userId": "string",
        "contract": "string",
        "companyId": "string",
        "role": 4,
        "userName": "string",
        "companyName": "string",
        "phoneNumber": "string",
        "email": "string",
        "isMultiCompany": true,
        "isPlard": true 
    });

});

export default router;