let helpers = require('./helpers');

function eva(){
    return helpers.dispatch_http_get("https://data.nasa.gov/resource/q8u9-7uq7.json");

}
module.exports = eva;

eva();