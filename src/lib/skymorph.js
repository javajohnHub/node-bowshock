//http://asterank.com/api/skymorph/search?<params>

//This API wraps NASA's SkyMorph archive in a RESTful JSON interface. Currently, it provides observation and image data from the NEAT survey.
var helpers = require('./helpers');
var kwargs = require('kwargs');

let skymorph = {
    search_target_obj(target){
    "use strict";
    /*
     Query for a specific target:

     http://asterank.com/api/skymorph/search?<params>
     target	Target object (lookup in MPC).
     */
    let base_url = "http://www.asterank.com/api/skymorph/search?";
    if(typeof target !== 'string'){
        throw "The target arg you provided is not the type of str";
    }
    else{
        base_url += "target=" + target;
    }
    return helpers.dispatch_http_get(base_url);
},


search_orbit(__kwargs){
    "use strict";
    /*
     Query based on orbital elements:

     http://asterank.com/api/skymorph/search_orbit?<params>
     epoch	Epoch ([M]JD or ISO)
     ecc	eccentricity
     per	Perihelion distance (AU)
     per_date	Perihelion date ([M]JD or ISO)
     om	Longitude of ascending node (deg)
     w	Argument of perihelion (deg)
     i	Inclination (deg)
     H	Absolute magnitude

     */
    let base_url = "http://www.asterank.com/api/skymorph/search_orbit?";
    for(let x in __kwargs){
        if (x === 'length' || !__kwargs.hasOwnProperty(x)) continue;
        base_url += x.toString() + "=" + __kwargs[x] + "&";

    }
    base_url = base_url.slice(0, -1);
    return helpers.dispatch_http_get(base_url);

}

};
module.exports = skymorph;

//search_target_obj("J99TS7A");