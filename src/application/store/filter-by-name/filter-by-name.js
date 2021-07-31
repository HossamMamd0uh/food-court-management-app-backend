import response from "../../../common/helpers/error-handler";
import errorCodes from "../../../common/constants/error-codes";

class filterByName {
  constructor(service) {
    this.service = service;
  }

        async excute(key, query = {}) {
            try {
            let storeFilterResult = [];
            let storeResult = await this.service.readAll(query);
            storeFilterResult = storeResult.data.filter((store) => {
                return (
                store.storeName.toLowerCase().includes(key.toLowerCase())
                );
            });

            if (storeFilterResult.error) {
                return response.responde(
                true,
                result._l,
                null,
                result.code,
                result.details,
                "",
                "execute#filterByName#27"
                );
            } else {
                return response.responde(false, false, storeFilterResult);
            }
            } catch (exception) {
            return response.responde(true, false, null, errorCodes.ERROR_LOADING_DATA_FROM_DATABASE, exception, "Not able to retrive data.",`filterByName#store`
            );
            }
        }
}

export default filterByName;
