let helpers = require('./helpers');

function curiosity(date){
    let base_url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";
    if (date) {
        try {
            helpers.vali_date(date);
            base_url += "earth_date=" + date + "&"
        }
        catch (e) {
            throw "Incorrect date format, should be YYYY-MM-DD";
        }

    }

    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.dispatch_http_get(req_url)

}
module.exports = curiosity;

//curiosity("2015-06-03");
