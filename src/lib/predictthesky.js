//NOT WORKING
//bad api address

/*
http://predictthesky.org/developers.html
Below description is taken from their website.
Introduction
It all starts with the root URL, the routes below are all based around this:

Retrieving Space Events
Events are the core purpose of the API. It returns a list of space objects (see below) which are visible from your current location, scored by a likelyhood that it can be seen. A weather object for the start and end of the event is returned.

Method	Route	Arguments
GET	/events/all	lat, lon, elevation, limit, date
GET	/event/<category>	lat, lon, elevation, limit, date
 */
var decimal = require('decimal');
var helpers = require('./helpers.js');

function space_events(lon, lat, limit, date){
    "use strict";
    /*

    lat & lon expect decimal latitude and longitude values. (Required)
    elevation assumes meters. (Optional)
    limit assumes an integer. Default is 5. (Optional)
    date expects an ISO 8601 formatted date. (Optional)
    */
    let base_url = 'http://api.predictthesky.org?';
    if(!lon || !lat){
        throw  "space_events endpoint expects lat and lon, type has to be float. Call the method with keyword args. Ex : lon=100.75, lat=1.5";
    }
    else{
        try{
            if(lat % 1 !== 0 && lon % 1 !== 0){
                base_url += "lon=" + decimal(lon).toString() + "&" + "lat=" + decimal(lat).toString();
            }

            }
            catch(e){
                throw "space_events endpoint expects lat and lon, type has to be float. Call the method with keyword args. Ex : lon=100.75, lat=1.5";

        }
    }
    if(date){
        try{
            helpers.validate_iso8601(date);
            base_url += "&" + 'date=' + date;
        }
        catch(e){
            throw "Your date input is not in iso8601 format. ex: 2014-01-01T23:59:59";
        }
    }
    if(limit){
        if(!parseInt(limit)){
            helpers.logger.log('error', "The limit arg you provided is not the type of int, ignoring it");
        }
        base_url += "&" + "limit=" + limit.toString();
    }
    return helpers.dispatch_http_get(base_url);
}

//space_events(lon=100.75, lat=1.5, limit=10, date="2017-03-11");
