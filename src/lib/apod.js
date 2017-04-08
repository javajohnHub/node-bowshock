"use strict";
let helpers = require('./helpers');

function apod(date, concept_tags){
    let base_url = "https://api.nasa.gov/planetary/apod?";
    if (date) {
        helpers.vali_date(date);
        base_url += "date=" + date + "&"
    }
    if (concept_tags === true){
        base_url += "concept_tags=True" + "&"
    }

    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.getJSON(req_url);

}
module.exports = apod;

//apod();