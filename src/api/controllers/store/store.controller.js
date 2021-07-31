import response from '../../../common/helpers/error-handler';
import errorCodes from '../../../common/constants/error-codes';
// App Use cases.

import storeApps from '../../../application/store/store.app';
let storeUC = storeApps();

async function createNewStore(req, res, next) {
    let store = req.body.store;
    let result = await storeUC.createNewStore.execute(store);
  
    if (result.error) {
      res.json(
        response.responde(
          true,
          result._l,
          null,
          result.code,
          result.details,
          "Your request has been terminated.",
          "createNewStore#store.controller.js#21"
        )
      )
    } else {
      res.json(
        response.responde(false, false, result.data)
      )
    }
  }


const actions = {
    createNewStore,
};

export default actions;