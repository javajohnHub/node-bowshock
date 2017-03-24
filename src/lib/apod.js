let helpers = require('./helpers');

function apod(date, concept_tags=true){
    let base_url = "https://api.nasa.gov/planetary/apod?";
    if (date) {
        try {
            helpers.vali_date(date);
            base_url += "date=" + date + "&"
        }
        catch (e) {
            throw "Incorrect date format, should be YYYY-MM-DD";
        }

    }
    if (concept_tags === true){
        base_url += "concept_tags=True" + "&"
    }

    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.dispatch_http_get(req_url)

}
module.exports = apod;
