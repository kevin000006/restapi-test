import {Router} from 'express';
import {getContextSesion} from '../controllers/updDatos.controller.js'; 

const router = Router();




router.get('/v1/data-contact',getContextSesion);

export default router;