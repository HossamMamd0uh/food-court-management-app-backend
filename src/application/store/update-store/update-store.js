import response from "../../../common/helpers/error-handler";
import errorCodes from "../../../common/constants/error-codes";

class updateStore {
    constructor(service) {
        this.service = service;
    }


    async execute( id, store) {
        try {
            let result = await this.service.update(id, store, {
                new: true
            });
            if (result.error) {
                return response.responde(
                    true,
                    result._l,
                    null,
                    result.code,
                    result.details,
                    "",
                    appData.client,
                    appData.WEDSID,
                    "execute#updateStore#15"
                );
            } else {
                return response.responde(false, false, result.data);

            }
        } catch (exception) {
            return response.responde(true, false, null, errorCodes.ENABLE_TO_UPDATE_RECORD_IN_DATA_BASE, exception,
                "Not able to update data.", "", "", `updateStore#store`);
        }
    }
}

export default updateStore;
