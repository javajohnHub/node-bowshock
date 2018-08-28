"use strict";
const helpers = require('./helpers');

let eonet = {
    events(object) {
        let base_url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?";
        if (!object) {
            return helpers.getJSON(base_url.slice(0, -1));
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

        return helpers.getJSON(base_url.slice(0, -1), 'GET')
    },
    categories(object) {
        let base_url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories/";

        if (!object) {
            return helpers.getJSON(base_url.slice(0, -1), 'GET')
        }

        base_url += object.id + "?";

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
        return helpers.getJSON(base_url.slice(0, -1), 'GET')


    },
    layers(id){
        let base_url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/layers/" + id;
        return helpers.getJSON(base_url, 'GET')
    }
};
module.exports = eonet;

//eonet.events({source: "InciWeb,EO",status: "closed",limit: 5, days:25});
//eonet.layers(8);
//eonet.categories({id:8, source: "InciWeb,EO",status: "open",limit: 5, days:25});