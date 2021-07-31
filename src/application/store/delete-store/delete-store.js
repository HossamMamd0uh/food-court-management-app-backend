import response from "../../../common/helpers/error-handler";
import errorCodes from "../../../common/constants/error-codes";

class deleteStore {
    constructor(service) {
        this.service = service;
    }

    async execute(id) {
        try {
            let result = await this.service.delete(id);

            if (result.error) {
                return response.responde(
                    true,
                    result._l,
                    null,
                    result.code,
                    result.details,
                    "",
                    "execute#deleteStore#23"
                );
            } else {
                return response.responde(false, false,result.data);                
            }
        } catch (exception) {
            return response.responde(true, false, null, errorCodes.ENABLE_TO_DELETE_FROM_DATABASE, exception,
                "Not able to delete data.", "", "", `deleteStore#store`);
        }
    }
}

export default deleteStore;
