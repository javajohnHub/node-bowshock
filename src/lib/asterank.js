"use strict";
/*
http://www.asterank.com/api

The Asterank database is a thin layer over the NASA/JPL Small Body Database, merged with JPL delta-v data, published asteroid mass data,
and their own calculations.

The database currently runs on mongodb and queries must adhere to mongo's json format for a 'find' operation.
*/
const helpers = require('./helpers');

function asterank(object){
    "use strict";
    /*
    Format
    Requests are of the form:

        http://asterank.com/api/asterank?query={query}&limit={limit}
            Response data formats are largely derived from NASA/JPL's Small Body Database query browser. Exceptions to this are the delta-v field (dv), the mass field (GM), and the normalized spectral type field (spec). Additional Asterank scores are included: closeness, price ($), and overall score.

    Sample Request
    This request returns an asteroid with a roughly circular orbit, low inclination, and semi-major axis less than 1.5 AU:

        /api/asterank?query={"e":{"$lt":0.1},"i":{"$lt":4},"a":{"$lt":1.5}}&limit=1
    */
    let base_url = "http://www.asterank.com/api/asterank?";
    if(object.query){

        base_url += "query=" + JSON.stringify(object.query) + "&"
        console.log(base_url);
    }
    if(object.limit){
        base_url += "limit=" + object.limit;
    }
    helpers.dispatch_http_get(base_url, function(data){
        return data;
    })
}
module.exports = asterank;
//asterank({query: {"e":{"$lt":0.1},"i":{"$lt":4},"a":{"$lt":1.5}}, limit: 10});

