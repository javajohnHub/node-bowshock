const logger = require('winston');
const datetime = require('node-datetime');
let request = require('request');

require('dotenv').config();

module.exports = {
dispatch_http_get: function(url){
    logger.log("warn", "Dispatching HTTP GET Request : %s ", url);
    request(url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body);
        return body;
    });
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

