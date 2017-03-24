/**
 * Created by john on 3/24/17.
 */
var apod = require('./src/lib/apod.js');
var helioviewer = require('./src/lib/helioviewer.js');

//with specific date and tags - For apod all args are optional
//apod('2017-11-13');
helioviewer.getjp2image(date="2014-01-01T23:59:59Z", sourceId=14);