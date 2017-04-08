"use strict";
let helpers = require('./helpers');

function eva(){
    helpers.dispatch_http_get("https://data.nasa.gov/resource/q8u9-7uq7.json", function(data){
        return data;
    });

}
module.exports = eva;
//eva();