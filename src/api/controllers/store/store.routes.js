import { Router } from 'express';
import actions from './store.controller';


// Define router.. 
var router = Router();


router.route('/create-new-store')
    .post(actions.createNewStore);

router.route('/get-all-stores')
    .get(actions.getAllStores)
    
export default router;