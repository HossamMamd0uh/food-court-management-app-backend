import { Router } from 'express';
import * as store from './store/store.routes';


// Define router.. 
var router = Router();


// controllers
router.use('/stores' , store.default);



export default router;

