//http://asterank.com/api/skymorph/search?<params>

//This API wraps NASA's SkyMorph archive in a RESTful JSON interface. Currently, it provides observation and image data from the NEAT survey.
var helpers = require('./helpers');

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
}

};
module.exports = skymorph;

//skymorph.search_target_obj("J99TS7A");
