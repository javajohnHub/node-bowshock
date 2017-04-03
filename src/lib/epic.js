"use strict";
let helpers = require('./helpers');

let epic = {
    natural(date){
        let base_url = "https://api.nasa.gov/EPIC/api/natural/";
        let req_url = '';
        if (date) {

                helpers.vali_date(date);
                req_url += base_url + "date/" + date + "?api_key=" + helpers.nasa_api_key();

        }else{
            req_url = base_url + "images?api_key=" + helpers.nasa_api_key();
        }
        helpers.dispatch_http_get(req_url, function(data){
            return data;
        });
    },
    enhanced(date){
        let base_url = "https://api.nasa.gov/EPIC/api/enhanced/";
        let req_url = '';
        if (date) {
            helpers.vali_date(date);
            req_url += base_url + "date/" + date + "?api_key=" + helpers.nasa_api_key();
        }else{
            req_url = base_url + "images?api_key=" + helpers.nasa_api_key();
        }
        helpers.dispatch_http_get(req_url, function(data){
            return data;
        });
    },
    /*
    ------CURRENTLY 404-------
    archive(date, png){
        let base_url = "https://api.nasa.gov/EPIC/archive/enhanced/";
        let req_url = '';
        if (date) {
            try {
                helpers.vali_date(date);
                date = helpers.format_date(date);
                req_url += base_url + date + "/png/" + png + "?api_key=" + helpers.nasa_api_key();
            }
            catch (e) {
                throw "Incorrect date format, should be YYYY-MM-DD";
            }
        }
        return helpers.dispatch_http_get(req_url);

    }
    */

};
module.exports = epic;

//epic.natural();