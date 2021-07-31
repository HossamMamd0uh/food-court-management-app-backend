
import response from '../../../common/helpers/error-handler';
import errorCodes from '../../../common/constants/error-codes';


class getSingleStore{
    constructor(service) {
        this.service = service;
    };

    async execute(id){
        try {
            let result = {};
            result = await this.service.read({ _id: id });

            if (result.error) {
                return response.responde(
                    true,
                    result._l,
                    null,
                    result.code,
                    result.details,
                    "execute#getSingleStore#29"
                );
            } else {
                return response.responde(false, false, result.data);

            }
        } catch (exception) {
            return response.responde(true, false, null, errorCodes.ERROR_LOADING_DATA_FROM_DATABASE, exception,
                "Not able to load data.", "", "", `getSingleStore#store`);
        }
    };
};

export default getSingleStore;