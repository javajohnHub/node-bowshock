let helpers = require('./helpers');

let neows = {
    today(detailed=false){
        let base_url = "https://api.nasa.gov/neo/rest/v1/feed/today?";
        let req_url = '';
        if(typeof detailed === 'boolean'){
            req_url = base_url + "detailed=" + detailed + "&api_key=" + helpers.nasa_api_key();
        }else{
            throw "detailed=true or true are the only arguments you can pass. Default value = false;";
        }
        return helpers.dispatch_http_get(req_url);
    },
    feed(start_date, end_date) {

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
        return helpers.dispatch_http_get(req_url);
    },
    browse() {
        let req_url = "https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=" + helpers.nasa_api_key();
        return helpers.dispatch_http_get(req_url);
    },
    stats(){
        let req_url = "https://api.nasa.gov/neo/rest/v1/stats?api_key=" + helpers.nasa_api_key();
        return helpers.dispatch_http_get(req_url);

    }

};
module.exports = neows;
//neows.feed(start_date="2015-06-03");
//neows.lookup(3542519);
//neows.browse();
//neows.today();
//neows.stats();