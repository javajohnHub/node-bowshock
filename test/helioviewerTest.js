var helioviewer = require('../index.js').helioviewer;
var chai = require('chai');

var assert = chai.assert;

describe('Helioviewer', function() {
    it('should return response code 200 with date provided getjp2image', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getjp2image({date:"2014-01-01T23:59:59"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with date provided and sourceId getjp2image', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getjp2image({date:"2014-01-01T23:59:59", sourceId: 14});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should throw an error if date is not provided', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.throws(function () { helioviewer.getjp2image({source: "InciWeb"}) }, Error, "date is a required parameter");
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with id provided getjp2Header', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getjp2header(76565);
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with startTime, endTime, and sourceId provided getJPX', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getJPX({startTime: "2014-01-01T00:00:00", endTime: "2014-01-01T00:45:00" , sourceId: 14});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with startTime, endTime, sourceId, and linked provided getJPX', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getJPX({
                    startTime: "2014-01-01T00:00:00",
                    endTime: "2014-01-01T00:45:00" ,
                    sourceId: 14,
                    linked: true
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with startTime, endTime, sourceId, and cadence provided getJPX', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getJPX({
                    startTime: "2014-01-01T00:00:00",
                    endTime: "2014-01-01T00:45:00" ,
                    sourceId: 14,
                    cadence: 12
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with startTimes, endTimes, and sourceId provided getJPXCloststToMidPoint', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getJPXClosestToMidPoint({
                    startTimes: [1306886400,1306887000,1306887600],
                    endTimes: [1306886700,1306887300,1306887900] ,
                    sourceId: 14
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with startTimes, endTimes, sourceId, and linked provided getJPXCloststToMidPoint', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getJPXClosestToMidPoint({
                    startTimes: [1306886400,1306887000,1306887600],
                    endTimes: [1306886700,1306887300,1306887900] ,
                    sourceId: 14,
                    linked: true
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with startTime, endTime, layers, events, eventsLabels and imageScale provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    //format: "mp4",
                    //frameRate: 15,
                    //maxFrames: 300,
                    //scale: true,
                    //scaleType: "earth",
                    //scaleX: -1000,
                    //scaleY: -500,
                    //movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with format provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    //frameRate: 15,
                    //maxFrames: 300,
                    //scale: true,
                    //scaleType: "earth",
                    //scaleX: -1000,
                    //scaleY: -500,
                    //movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with frameRate provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    //maxFrames: 300,
                    //scale: true,
                    //scaleType: "earth",
                    //scaleX: -1000,
                    //scaleY: -500,
                    //movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with maxFrames provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    //scale: true,
                    //scaleType: "earth",
                    //scaleX: -1000,
                    //scaleY: -500,
                    //movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with scale provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    //scaleType: "earth",
                    //scaleX: -1000,
                    //scaleY: -500,
                    //movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with scaleType provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    //scaleX: -1000,
                    //scaleY: -500,
                    //movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with scaleX provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    //scaleY: -500,
                    //movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with scaleY provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    //movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with movieLength provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    //watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with watermark provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    //width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with width provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    //height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with height provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    height: 1200,
                    //x0: 0,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with x0 provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    height: 1200,
                    x0: 1,
                    //y0: 0,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with y0 provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    height: 1200,
                    x0: 1,
                    y0: 1,
                    //x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with x1 provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    height: 1200,
                    x0: 0,
                    y0: 0,
                    x1: -5000,
                    //y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with y1 provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    height: 1200,
                    x0: 0,
                    y0: 0,
                    x1: -5000,
                    y1: -5000,
                    //x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with x2 provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    height: 1200,
                    x0: 0,
                    y0: 0,
                    x1: -5000,
                    y1: -5000,
                    x2: 5000,
                    //y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with y2 provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    height: 1200,
                    x0: 0,
                    y0: 0,
                    x1: -5000,
                    y1: -5000,
                    x2: 5000,
                    y2: 5000,
                    //callback: "Wrap the response object in a function call of your choosing."
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with callback provided queueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.queueMovie({
                    startTime: "2010-03-01T12:12:12",
                    endTime: "2010-03-04T12:12:12",
                    layers: "[3,1,100],[4,1,100]",
                    events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
                    eventsLabels: false,
                    imageScale: 21.04,
                    format: "mp4",
                    frameRate: 15,
                    maxFrames: 300,
                    scale: true,
                    scaleType: "earth",
                    scaleX: -1000,
                    scaleY: -500,
                    movieLength: 4.3333,
                    watermark: true,
                    width: 1920,
                    height: 1200,
                    x0: 0,
                    y0: 0,
                    x1: -5000,
                    y1: -5000,
                    x2: 5000,
                    y2: 5000,
                    callback: "callback"
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with id provided reQueueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.reQueueMovie("VXvX5");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with id and format provided reQueueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getMovieStatus({
                    id: "VXvX5",
                    format: "mp4"
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with verbose provided reQueueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getMovieStatus({
                    id: "VXvX5",
                    format: "mp4",
                    verbose: true
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with callback provided reQueueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getMovieStatus({
                    id: "VXvX5",
                    format: "mp4",
                    verbose: true,
                    callback: "callback"
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with token provided reQueueMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getMovieStatus({
                    id: "VXvX5",
                    format: "mp4",
                    //verbose: true,
                    //callback: "callback",
                    token: "4673d6db4e2a3365ab361267f2a9a112"
                });
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200 );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
});