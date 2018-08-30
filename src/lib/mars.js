"use strict";
let helpers = require('./helpers');

let mars = {
    curiosity(date){
        let base_url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?";

        helpers.vali_date(date);
        base_url += "earth_date=" + date + "&";

        base_url += "api_key=" + helpers.nasa_api_key();

        return helpers.getJSON(base_url, 'GET')


    },
    opportunity(date){
        let base_url = "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?";

        helpers.vali_date(date);
        base_url += "earth_date=" + date + "&";


        base_url += "api_key=" + helpers.nasa_api_key();

        return helpers.getJSON(base_url, 'GET')


    },
    spirit(date){
        let base_url = "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?";


        helpers.vali_date(date);
        base_url += "earth_date=" + date + "&";


        base_url += "api_key=" + helpers.nasa_api_key();

        return helpers.getJSON(base_url, 'GET')


    },

    manifest(rover){
        let base_url = '';
        if(rover.sol || rover.camera){
            base_url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover.rover}?`
        }else{
            base_url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover.rover}`
        }
        

        if(rover.sol){
            base_url += "sol=" + rover.sol + "&";
        }
        if(rover.camera){
            base_url += "camera=" + rover.camera + "&";
        }
        base_url += "api_key=" + helpers.nasa_api_key();
        return helpers.getJSON(`${base_url}`, 'GET')
    }
};
module.exports = mars;

//curiosity("2015-06-03");
//opportunity("2015-06-03");
//spirit("2015-06-03");
//mars.manifest('curiosity')
