import response from "../../../common/helpers/error-handler";
import errorCodes from "../../../common/constants/error-codes";

class deleteAllStores {
    constructor(service) {
        this.service = service;
    }


    async execute(query = {}) {
        try {
            let result = await this.service.deleteAll(query);

            if (result.error) {
                return response.responde(
                    true,
                    result._l,
                    null,
                    result.code,
                    result.details,
                    "",
                    "execute#deleteAllStores#22"
                );
            } else {
                return response.responde(false, false, result.data);

            }
        } catch (exception) {
            return response.responde(true, false, null, errorCodes.ERROR_LOADING_DATA_FROM_DATABASE, exception,
                "Not able to delete data.", "", "", `deleteAllStores#store`);
        }
    }
}

export default deleteAllStores;
