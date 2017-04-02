"use strict";
const helpers = require('./helpers');

let eonet = {
    events(object) {
        let base_url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?";
        if (!object) {
            return helpers.dispatch_http_get(base_url.slice(0, -1), function(data){
                return data;
            });
        }
        if (object.source) {
            if (typeof object.source === 'string') {
                base_url += "source=" + object.source + '&';
            }
        }
        if (object.status) {
            if (typeof object.status === 'string') {
                base_url += "status=" + object.status + "&";
            }
        }
        if (object.limit) {
            if (parseInt(object.limit)) {
                base_url += "limit=" + object.limit + '&';
            }
        }
        if (object.days) {
            if (parseInt(object.days)) {
                base_url += "days=" + object.days + "&";
            }
        }

        return helpers.dispatch_http_get(base_url.slice(0, -1), function(data){
            return data;
        });
    },
    categories(object) {
        let base_url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/";

        if (!object) {
            return helpers.dispatch_http_get(base_url.slice(0, -1), function(data){
                return data;
            });
        }
        if (object && !object.id ) {
            throw "An id is required";
        }else{
            base_url += object.id + "?";
        }


        if (object.source) {
            if (typeof object.source === 'string') {
                base_url += "source=" + object.source + '&';
            }

        }

            if (object.status) {
                if (typeof object.status === 'string') {
                    base_url += "status=" + object.status + "&";
                }
            }
            if (object.limit) {
                if (parseInt(object.limit)) {
                    base_url += "limit=" + object.limit + '&';
                }
            }
            if (object.days) {
                if (parseInt(object.days)) {
                    base_url += "days=" + object.days + "&";
                }
            }

        return helpers.dispatch_http_get(base_url.slice(0, -1), function(data){
            return data;
        });


    },
    layers(id){
        let base_url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/";
        if(parseInt(id)){
            base_url += id;
        }
        return helpers.dispatch_http_get(base_url.slice(0, -1), function(data){
            return data;
        });
    }
};
module.exports = eonet;

//eonet.events({source: "InciWeb,EO",status: "closed",limit: 5, days:25});
//eonet.layers(8);
//eonet.categories({id:8, source: "InciWeb,EO",status: "closed",limit: 5, days:25});