"use strict";
let helpers = require('./helpers');

function eva(){
    return helpers.getJSON("https://data.nasa.gov/resource/q8u9-7uq7.json");

}
module.exports = eva;
//eva();