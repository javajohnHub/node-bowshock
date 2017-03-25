const logger = require('winston');
const datetime = require('node-datetime');
var request = require('request');
require('dotenv').config();

module.exports = {

dispatch_http_get: function(url){
    logger.log("warn", "Dispatching HTTP GET Request : %s ", url);
    let headers = {
        'User-Agent': 'Super Agent/0.0.1',
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    let options = {
        url: url,
        method: 'GET',
        headers: headers
        };
    try {
        return new Promise(
            function (resolve, reject) {
                request(options, function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        // Print out the response body
                        logger.log('info','Status: ', response.statusCode );
                        resolve(body);
                    }
                    reject(error);
                });

            });
    }
    catch(e){
        console.log(e);
    }

},

vali_date: function(date_text) {
    "use strict";
    try {
        let dt = datetime.create(date_text);
        dt.format('Y-m-d');
    }
    catch (e) {
        throw "Incorrect date format, should be YYYY-MM-DD";
    }

},

validate_year: function(date_text) {
    "use strict";
    try {
        let dt = datetime.create(date_text);
        dt.format('Y');
    }
    catch (e) {
        throw "Incorrect date format, should be YYYY";
    }

},

validate_iso8601(date_text){
        "use strict";
    try{
        let dt = datetime.create(date_text);
        dt.format('Y-m-dT H:M:S');
    }
    catch(e){
        throw "Incorrect date format, should be YYYY";
    }
},

    nasa_api_key: function() {
        "use strict";
        return process.env.NASA_API_KEY;

}

};

