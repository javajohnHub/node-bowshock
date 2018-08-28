"use strict";
let helpers = require('./helpers');

function eva(){
    return of(helpers.getJSON("https://data.nasa.gov/resource/q8u9-7uq7.json", 'GET').then((data) => {
        return data;
    }))

}
module.exports = eva;
//eva();