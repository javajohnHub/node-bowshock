/*
This endpoint retrieves the Landsat 8 image for the supplied location and date.
The response will include the date and URL to the image that is closest to the supplied date.
The requested resource may not be available for the exact date in the request. You can retrieve a list of available resources through the assets endpoint.

The cloud score is an optional calculation that returns the percentage of the queried image that is covered by clouds.
If False is supplied to the cloud_score parameter, then no keypair is returned.
If True is supplied, then a keypair will always be returned, even if the backend algorithm is not able to calculate a score.
Note that this is a rough calculation, mainly used to filter out exceedingly cloudy images.
*/
const helpers = require('./helpers');
const decimal = require('decimal');
let earth = {
    imagery(lon, lat, date, dim, cloud_score) {
    "use strict";
    /*
     ----------QUERY PARAMETERS----------

     Parameter	Type	Default	Description
     lat	float	n/a	Latitude
     lon	float	n/a	Longitude
     dim	float	0.025	width and height of image in degrees
     date	YYYY-MM-DD  today	date of image ----if not supplied, then the most recent image (i.e., closest to today) is returned
     cloud_score	bool	False	calculate the percentage of the image covered by clouds
     api_key	string	vDEMO_KEY	api.data.gov key for expanded usage

     ---------EXAMPLE QUERY--------
     https://api.data.gov/nasa/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-04&cloud_score=True&api_key=DEMO_KEY
     */

    let base_url = "https://api.nasa.gov/planetary/earth/imagery?";
    if (!lon || !lat) {
        throw "imagery endpoint expects lat and lon, type has to be float. Call the method with keyword args. Ex : lon=100.75, lat=1.5";
    }
    else {
        try {
            if (!parseInt(lon) || !parseInt(lat)) {
                base_url += "lon=" + decimal(lon).toString() + "&" + "lat=" + decimal(lat).toString() + "&";
                console.log(base_url);
            }

        }
        catch (e) {
            throw "imagery endpoint expects lat and lon, type has to be float. Call the method with keyword args. Ex : lon=100.75, lat=1.5";
        }
    }
    if (dim) {
        try {
            if (!parseInt(dim)) {
                base_url += "dim=" + decimal(dim).toString() + "&";
            }

        }
        catch (e) {
            throw "imagery endpoint expects dim to be a float";
        }
    }
    if (date) {
        try {
            helpers.vali_date(date);
            base_url += "date=" + date + "&";
        }
        catch (e) {
            throw "Incorrect date format, should be YYYY-MM-DD";
        }
    }
    if (cloud_score === true) {
        base_url += "cloud_score=True" + "&";
    }
    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.dispatch_http_get(req_url);
},

/*
 This endpoint retrieves the date-times and asset names for available imagery for a supplied location.
 The satellite passes over each point on earth roughly once every sixteen days.
 This is an amazing visualization of the acquisition pattern for Landsat 8 imagery.
 The objective of this endpoint is primarily to support the use of the imagery endpoint.
 */
assets(lon, lat, begin, end){
    /*
     HTTP REQUEST

     GET https://api.data.gov/nasa/planetary/earth/assets

     QUERY PARAMETERS

     Parameter	Type	Default	Description
     lat	float	n/a	Latitude
     lon	float	n/a	Longitude
     begin	YYYY-MM-DD	n/a	beginning of date range
     end	        YYYY-MM-DD	today	end of date range
     api_key	string	DEMO_KEY	api.data.gov key for expanded usage
     EXAMPLE QUERY

     https://api.data.gov/nasa/planetary/earth/assets?lon=100.75&lat=1.5&begin=2014-02-01&api_key=DEMO_KEY
     */
    let base_url = "https://api.nasa.gov/planetary/earth/assets?";
    if(!lon || !lat){
        throw "assets endpoint expects lat and lon, type has to be float. Call the method with keyword args. Ex : lon=100.75, lat=1.5";
    }
    else{
        try{
            if (!parseInt(lon) && !parseInt(lat)) {
                base_url += "lon=" + decimal(lon).toString() + "&" + "lat=" + decimal(lat).toString() + "&";
            }
        }
        catch(e){
            throw "assets endpoint expects lat and lon, type has to be float. Call the method with keyword args. Ex : lon=100.75, lat=1.5";
        }
    }
    if(!begin){
        throw "Begin date is missing, which is mandatory. Format : YYYY-MM-DD";
    }
    else{
        try{
            helpers.vali_date(begin);
            base_url += "begin=" + begin + "&";
        }
        catch(e){
            throw "Incorrect date format, should be YYYY-MM-DD";
        }
    }
    if(end){
        try{
            helpers.vali_date(end);
            base_url += "end=" + end + "&";
        }
        catch(e){
            throw "Incorrect date format, should be YYYY-MM-DD";
        }
    }
    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.dispatch_http_get(req_url)

}
};
module.exports = earth;
//earth.imagery(lon=100.75, lat=1.5, date="2014-02-04");
//earth.assets(lon=100.75, lat=1.5, begin="2014-02-01");
