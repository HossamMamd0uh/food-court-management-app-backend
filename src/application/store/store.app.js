import storeService from '../../services/store.service';
import storeModel from '../../models/store/store';

import createNewStore from './create-new-store/create-new-store';
import getAllStores from './get-all-stores/get-all-stores';
// Construct the store service!
const service = new storeService(new storeModel().constructModel() );

export default () => {
    return Object.freeze({
        createNewStore: new createNewStore(service),
        getAllStores: new getAllStores(service),
    })
};

