"use strict";
/*
http://marsweather.ingenology.com/#get_started

Below description taken from https://github.com/ingenology/mars_weather_api
The {MAAS} API is an open source REST API built to help make it easier and more efficient to build interactive applications that want to utilize the wealth of weather data being transmitted by the Curiosity Rover on Mars. Our API is built upon the REMS (Rover Environmental Monitoring Station) data provided by the Centro de Astrobiologia (CSIC-INTA).
This API is built on Django and Django REST Framework.
Our implementation of the API is available at marsweather.ingenology.com.
*/

const helpers = require('./helpers')

let maas = {
    maas_latest(){
    return helpers.dispatch_http_get("http://marsweather.ingenology.com/v1/latest", function(data){
        return data;
    });
},




maas_archive(begin, end){
    "use strict";
    /*
     This returns a collection of JSON objects for every weather report available for October 2012:

     {
     "count": 29,
     "next": "http://marsweather.ingenology.com/v1/archive/?terrestrial_date_end=2012-10-31&terrestrial_date_start=2012-10-01&page=2",
     "previous": null,
     "results": [
     ...
     ]
     }
     */
    let base_url = 'http://marsweather.ingenology.com/v1/archive/?';

        helpers.vali_date(begin);
        helpers.vali_date(end);
        base_url += 'terrestrial_date_start=' + begin + "&" + 'terrestrial_date_end=' + end;

    return helpers.dispatch_http_get(base_url, function(data){
        return data;
    });
}
};
module.exports = maas;


//maas_latest();
//maas.maas_archive("2015-03-19", "2017-03-19");