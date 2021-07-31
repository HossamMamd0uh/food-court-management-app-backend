import storeService from '../../services/store.service';
import storeModel from '../../models/store/store';

import createNewStore from './create-new-store/create-new-store';
// Construct the store service!
const service = new storeService(new storeModel().constructModel() );

export default () => {
    return Object.freeze({
        createNewStore: new createNewStore(service),
    })
};

