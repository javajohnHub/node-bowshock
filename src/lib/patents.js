"use strict";
/*
The NASA patent portfolio is available to benefit US citizens.

Through partnerships and licensing agreements with industry,
these patents ensure that NASAs investments in pioneering research find secondary uses that benefit the economy
create jobs, and improve quality of life. This endpoint provides structured, searchable developer access to NASAs patents that have been curated to support technology transfer.
 */
let helpers = require('./helpers');


function patents(){
    let base_url = "https://data.nasa.gov/resource/nasa-patents.json";

    return helpers.getJSON(base_url, 'GET')
}

module.exports = patents;
//patents(query="temperature");



