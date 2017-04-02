"use strict";
/*
http://www.asterank.com/api

The Asterank database is a thin layer over the NASA/JPL Small Body Database, merged with JPL delta-v data, published asteroid mass data,
and their own calculations.

The database currently runs on mongodb and queries must adhere to mongo's json format for a 'find' operation.
*/
const helpers = require('./helpers');

function asterank(query, limit){
    let base_url = "http://www.asterank.com/api/asterank?";
    if(query){

        base_url += "query=" + query + "&"

    }
    if(limit){
        base_url += "limit=" + limit;

    }

    return helpers.dispatch_http_get(base_url, function(data){
        return data;
    })
}
module.exports = asterank;
//asterank({"e":{"$lt":0.1},"i":{"$lt":4},"a":{"$lt":1.5}}, 10);

