"use strict";
/*
This endpoint retrieves the Landsat 8 image for the supplied location and date.
The response will include the date and URL to the image that is closest to the supplied date.
The requested resource may not be available for the exact date in the request. You can retrieve a list of available resources through the assets endpoint.

The cloud score is an optional calculation that returns the percentage of the queried image that is covered by clouds.
If False is supplied to the cloud_score parameter, then no keypair is returned.
If True is supplied, then a keypair will always be returned, even if the backend algorithm is not able to calculate a score.
Note that this is a rough calculation, mainly used to filter out exceedingly cloudy images.
*/

const helpers = require("./helpers");
let earth = {
  imagery(object) {
    console.log(object);
    let base_url = "https://api.nasa.gov/planetary/earth/imagery?";
    if (object.lon && object.lat) {
      base_url +=
        "lon=" +
        parseFloat(object.lon) +
        "&" +
        "lat=" +
        parseFloat(object.lat) +
        "&";
      if (object.date) {
        helpers.vali_date(object.date);
        base_url += "date=" + object.date + "&";
      }
      if (object.cloud_score === true) {
        base_url += "cloud_score=True" + "&";
      }
    }
    let req_url = base_url + "api_key=" + helpers.nasa_api_key();
    console.log(req_url);
    return helpers.getJSON(encodeURI(req_url), "GET");
  },

  /*
 This endpoint retrieves the date-times and asset names for available imagery for a supplied location.
 The satellite passes over each point on earth roughly once every sixteen days.
 This is an amazing visualization of the acquisition pattern for Landsat 8 imagery.
 The objective of this endpoint is primarily to support the use of the imagery endpoint.
 */
  assets(object) {
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
    if (object.lon && object.lat) {
      base_url += "lon=" + object.lon + "&" + "lat=" + object.lat + "&";

      if (object.begin) {
        helpers.vali_date(object.begin);
        base_url += "begin=" + object.begin + "&";
      }
      if (object.end) {
        helpers.vali_date(object.end);
        base_url += "end=" + object.end + "&";
      }
    }
    let req_url = base_url + "api_key=" + helpers.nasa_api_key();

    return helpers.getJSON(req_url, "GET");
  }
};
module.exports = earth;
//earth.imagery({lon:100.75, lat:1.5, date:"2014-02-04"});
//earth.assets({lon:100.75, lat:1.5, begin:"2014-02-01"});
