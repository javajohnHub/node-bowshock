"use strict";
let helpers = require('./helpers');

function sounds(query, limit){
    let base_url = "https://api.nasa.gov/planetary/sounds?";
    if (query) {
        try {
            base_url += "q=" + query + "&";
        }
        catch (e) {
            throw "Incorrect date format, should be YYYY-MM-DD";
        }

    }
    if (parseInt(limit)){
        base_url += "&limit=" + limit + "&";
    }

    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.dispatch_http_get(req_url)

}
module.exports = sounds;