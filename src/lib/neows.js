"use strict";
let helpers = require('./helpers');

let neows = {
    today(){
        let base_url = "https://api.nasa.gov/neo/rest/v1/feed/today?";

        let req_url = base_url + "detailed=True&api_key=" + helpers.nasa_api_key();
        return of(helpers.getJSON(req_url, 'GET').then((data) => {
            return data;
        }))

    },
    feed(start_date, end_date) {

        let base_url = "https://api.nasa.gov/neo/rest/v1/feed?";
        if (start_date) {
                helpers.vali_date(start_date);
                base_url += "start_date=" + start_date + "&";

        }
        if (end_date) {

                helpers.vali_date(end_date);
                base_url += "end_date=" + end_date + "&";
        }

        let req_url = base_url + "api_key=" + helpers.nasa_api_key();

        return of(helpers.getJSON(req_url, 'GET').then((data) => {
            return data;
        }))



    },
    lookup(Id) {
        /*
         Lookup a specific Asteroid based on its NASA JPL small body (SPK-ID) ID
         */
        let base_url = "https://api.nasa.gov/neo/rest/v1/neo/";
        let req_url = '';
        if (parseInt(Id)) {
            req_url += base_url + Id + "?api_key=" + helpers.nasa_api_key();
        }
        return of(helpers.getJSON(req_url, 'GET').then((data) => {
            return data;
        }))
    },
    browse() {
        let req_url = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=" + helpers.nasa_api_key();
        return of(helpers.getJSON(req_url, 'GET').then((data) => {
            return data;
        }))
    },
    stats(){
        let req_url = "https://api.nasa.gov/neo/rest/v1/stats?api_key=" + helpers.nasa_api_key();
        return of(helpers.getJSON(req_url, 'GET').then((data) => {
            return data;
        }))

    }

};
module.exports = neows;
//neows.feed(start_date="2015-06-03");
//neows.lookup(3542519);
//neows.browse();
//neows.today();
//neows.stats();