let helpers = require('./helpers');

function neows(start_date, end_date){
    let base_url = "https://api.nasa.gov/neo/rest/v1/feed?";
    if (start_date) {
        try {
            helpers.vali_date(start_date);
            base_url += "start_date=" + start_date + "&"
        }
        catch (e) {
            throw "Incorrect date format, should be YYYY-MM-DD";
        }
    }
    if (end_date) {
        try {
            helpers.vali_date(end_date);
            base_url += "end_date=" + end_date + "&"
        }
        catch (e) {
            throw "Incorrect date format, should be YYYY-MM-DD";
        }
    }

    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.dispatch_http_get(req_url);


}
module.exports = neows;
//neows(start_date="2015-06-03");