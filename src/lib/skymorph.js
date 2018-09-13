"use strict";
var helpers = require("./helpers");
var opn = require("opn");
let skymorph = {
  search_target_obj(target) {
    /*
         Query for a specific target:

         http://asterank.com/api/skymorph/search?<params>
         target	Target object (lookup in MPC).
         */
    let base_url = "http://www.asterank.com/api/skymorph/search?";
    base_url += "target=" + target;
    console.log(base_url);
    return helpers.getJSON(base_url, "GET");
  },
  search_image(key) {
    let base_url = "http://asterank.com/api/skymorph/image?key=" + key.key;
    console.log(base_url);
    opn(base_url);
    return base_url;
  }
};
module.exports = skymorph;

//skymorph.search_target_obj("J99TS7A");

//skymorph.search_image("|001204124410|51882.530787037|129.062741402712|4.64001695570385|128.337645|4.0726|20.70|-4.28|-11.08|n.a.|n.a.|n.a.|71.9154214757038|547.287989060186|y|");
