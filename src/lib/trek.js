"use strict";
const helpers = require('./helpers');

let trek = {
    mars(layer_id) {
        let base_url = "https://api.nasa.gov/mars-wmts/catalog/";
        let req_url = base_url + layer_id + "/1.0.0/WMTSCapabilities.xml";
        return helpers.getXML(req_url);
    },

    vesta(layer_id){
        let base_url = "https://api.nasa.gov/vesta-wmts/catalog/";
        let req_url = base_url + layer_id + "/1.0.0/WMTSCapabilities.xml";
        return helpers.getXML(req_url);
    }
};
module.exports = trek;

//trek.mars("curiosity_ctx_mosaic");
//trek.vesta("global_LAMO");

