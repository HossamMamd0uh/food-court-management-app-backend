import response from "../../../common/helpers/error-handler";
import errorCodes from "../../../common/constants/error-codes";

class createNewStore{
    constructor(service) {
        this.service = service;
    }

    async execute(store) {
        try {
            let result = await this.service.create(store);

            if (result.error) {
                return response.responde(
                    true,
                    result._l,
                    null,
                    result.code,
                    result.details,
                    "",
                    "execute#createNewStore#23"
                );
            } else {
                return response.responde(false, false,result.data);
            }
        } catch (exception) {
            return response.responde(true, false, null, errorCodes.ENABLE_TO_SAVE_RECORD_TO_DATA_BASE, exception,
                "Not able to save data.", "", "", `createNewStore#store`);
        }
    }
}

export default createNewStore;
