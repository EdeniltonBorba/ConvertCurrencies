import axios from "axios";
const BASEURL = "http://www.api.currencylayer.com/live?";
const APIKEY = " access_key = c9aea1c61115f79a367ae98929ce1195";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};
