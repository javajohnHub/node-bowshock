"use strict";
let helpers = require('./helpers');

function apod(date, concept_tags){
    console.log(date)
    let base_url = "https://api.nasa.gov/planetary/apod?";
    if (date) {
        helpers.validate_iso8601(date);
        base_url += "date=" + date.toISOString().split('T')[0] + "&"
    }
    if (concept_tags === true){
        base_url += "concept_tags=True" + "&"
    }

    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.getJSON(req_url, 'GET')

}
module.exports = apod;

//apod();