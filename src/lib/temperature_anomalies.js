//not working - bad api endpoint
/*
There is no doubt that, on average, the earth is warming. However, the warming is spatially heterogenous.

 How much warmer (or cooler) is your hometown? This endpoint reports local temperature anomalies from the
 Goddard Institute for Space Studies Surface Temperature Analysis via the New Scientist web application to explore global temperature anomalies.
 This endpoint restructures the query and response to correspond to other APIs on api.nasa.gov. The developer supplies a location and date range, and the returned object is a list of dictionaries that is ready for visualization in the d3 framework.
*/
var decimal = require('decimal');
var helpers = require('./helpers');


function address(address, begin, end){
    "use strict";
    /*
     HTTP REQUEST

     GET https://api.data.gov/nasa/planetary/earth/temperature/address

     QUERY PARAMETERS

     Parameter	Type	Default	Description
     text	string	n/a	Address string
     begin	int	1880	beginning year for date range, inclusive
     end	int	2014	end year for date range, inclusive
     api_key	string	DEMO_KEY	api.data.gov key for expanded usage
     EXAMPLE QUERY

     https://api.data.gov/nasa/planetary/earth/temperature/address?text=1800 F Street, NW, Washington DC&begin=1990
     */
    let base_url = "https://api.nasa.gov/planetary/earth/temperature/address?";
    if(!address){
        throw "address is missing, which is mandatory. example : 1800 F Street, NW, Washington DC";
    }
    else if(typeof address !== 'string'){
        try{
            address = address.toString();
        }
        catch(e){
            throw "address has to be type of string";
        }
    }
    else{
        base_url += "text=" + address + "&";
    }
    if(!begin){
        throw "Begin year is missing, which is mandatory. Format : YYYY";
    }
    else{
        try{
            helpers.validate_year(begin);
            base_url += "begin=" + begin + "&";
        }
        catch(e){
            throw "Incorrect begin year format, should be YYYY";
        }
    }
    if(end){
        try{
            helpers.validate_year(end);
            base_url += "end=" + end + "&";
        }
        catch(e){
            throw "Incorrect end year format, should be YYYY";
        }
    }
    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.dispatch_http_get(req_url)
}

function coordinate(lon, lat, begin, end){
    "use strict";
    /*
    HTTP REQUEST

    GET https://api.nasa.gov/planetary/earth/temperature/coords

        QUERY PARAMETERS

    Parameter	Type	Default	Description
    lat	float	n/a	Latitude
    lon	float	n/a	Longitude
    begin	int	1880	beginning year for date range, inclusive
    end	int	2014	end year for date range, inclusive
    api_key	string	DEMO_KEY	api.data.gov key for expanded usage
    EXAMPLE QUERY

    https://api.nasa.gov/planetary/earth/temperature/coords?lon=100.3&lat=1.6&begin=1990&end=2005&api_key=DEMO_KEY
*/
    let base_url = "http://api.data.gov/nasa/planetary/earth/temperature/coords?";
    if(!lon || !lat){
        throw "temp/coordinate endpoint expects lat and lon, type has to be float. Call the method with keyword args. Ex : lon=100.75, lat=1.5";
    }
    else{
        try{
            if (!parseInt(lon) && !parseInt(lat)){
                base_url += "lon=" + decimal(lon).toString() + "&" + "lat=" + decimal(lat).toString() + "&"
            }
        }
        catch(e){
            throw "temp/coordinate endpoint expects lat and lon, type has to be float. Call the method with keyword args. Ex : lon=100.75, lat=1.5";
        }
    }
    if(!begin){
        throw "Begin year is missing, which is mandatory. Format : YYYY";
    }
    else{
        try{
            helpers.validate_year(begin);
            base_url += "begin=" + begin + "&";
        }
        catch(e){
            throw "Incorrect begin year format, should be YYYY";
        }
    }
    if(end){
        try{
            helpers.validate_year(end);
            base_url += "end=" + end + "&";
        }
        catch(e){
            throw "Incorrect end year format, should be YYYY";
        }
    }
    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return dispatch_http_get(req_url);
}

//address("3500 Reynolds Rd Toledo Ohio", "2015");
//coordinate();