/**
 * Created by john on 3/24/17.
 */
var apod = require('./src/lib/apod.js');
var helioviewer = require('./src/lib/helioviewer.js');
var asterank = require('./src/lib/asterank.js');
//with specific date and tags - For apod all args are optional
//apod('2017-11-13');
//helioviewer.getjp2image(date="2014-01-01T23:59:59Z", sourceId=14);
asterank(
    query={"e": {"$lt": 0.1},
        "i": {"$lt": 4},
        "a": {"$lt": 1.5}},
    limit=1)