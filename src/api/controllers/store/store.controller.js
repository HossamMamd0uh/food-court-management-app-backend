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

async function getAllStores(req, res, next) {

    let result = await storeUC.getAllStores.execute();
    if (result.error) {
      res.json(
        response.responde(
          true,
          result._l,
          null,
          result.code,
          result.details,
          "Your request has been terminated.",
          "getAllStores#store.controller.js#44",
        )
      )
    } else {
      res.json(
        response.responde(false, false, result.data)
      )
    }
  }

async function deleteStore(req, res, next) {
    let id = req.params.id;
    let client = req.params.clientRef;
  
  
  
    let result = await storeUC.deleteStore.execute(id);
    if (result.error) {
      res.json(
        response.responde(
          true,
          result._l,
          null,
          result.code,
          result.details,
          "Your request has been terminated.",
          appData.client,
          appData.WEDSID,
          "deleteStore#store.controller.js#73",
        )
      )
    } else {
      res.json(
        response.responde(false, false, result.data)
      )
    }
  }

async function updateStore(req, res, next) {
    let store = req.body.store;
    let id = req.params.id;
  
  
    let result = await storeUC.updateStore.execute(id, store);
    if (result.error) {
      res.json(
        response.responde(
          true,
          result._l,
          null,
          result.code,
          result.details,
          "Your request has been terminated.",
          "updateStore#store.controller.js#98",
        )
      )
    } else {
      res.json(
        response.responde(false, false, result.data)
      )
    }
  }

async function filterByName(req, res, next) {
    let key = req.query.key;
  
    let result = await storeUC.filterByName.excute(key)
    if (result.error) {
      res.json(
        response.responde(
          true,
          result._l,
          null,
          result.code,
          result.details,
          "Your request has been terminated.",
          "search#search.controller.js#121",
        )
      )
    } else {
      res.json(
        response.responde(false, false, result.data)
      )
    }
  };

const actions = {
    createNewStore,
    getAllStores,
    deleteStore,
    updateStore,
    filterByName
};

export default actions;