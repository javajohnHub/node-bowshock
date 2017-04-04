var helioviewer = require('../index.js').helioviewer;
var chai = require('chai');
var fs = require('fs');
var assert = chai.assert;
chai.use(require('chai-fs'));

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

    it('should return response code 200 with id and format provided getMovieStatus()', function(done) {
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

    it('should return response code 200 with verbose provided getMovieStatus()', function(done) {
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
    it('should return response code 200 with callback provided getMovieStatus()', function(done) {
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

    it('should return response code 200 with token provided getMovieStatus()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.getMovieStatus({
                    id: "VXvX5",
                    format: "mp4",
                    verbose: true,
                    callback: "callback",
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
    it('should return file exists with id and format provided downloadMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.downloadMovie({
                    id: "VXvX5",
                    format: "mp4",
                });

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            var file = fs.readFileSync("./VXvX5.mp4");
            assert.pathExists(file.toString(), "File exists");
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return file exists with hq provided downloadMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.downloadMovie({
                    id: "F3Dh5",
                    format: "mp4",
                    hq: true
                });

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            var file = fs.readFileSync("./F3Dh5.mp4");
            assert.pathExists(file.toString(), "File exists");
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return req_url with id, format, and height provided playMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.playMovie({
                    id: "F3Dh5",
                    format: "mp4",
                    height: 1920
                });

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r, "https://api.helioviewer.org/v2/playMovie/?id=F3Dh5&format=mp4&height=1920" );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return req_url with hq provided playMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.playMovie({
                    id: "F3Dh5",
                    format: "mp4",
                    height: 1920,
                    hq: true
                });

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r, "https://api.helioviewer.org/v2/playMovie/?id=F3Dh5&format=mp4&height=1920&hq=true" );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return req_url with width provided playMovie()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.playMovie({
                    id: "F3Dh5",
                    format: "mp4",
                    height: 1920,
                    hq: true,
                    width: 1200
                });

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r, "https://api.helioviewer.org/v2/playMovie/?id=F3Dh5&format=mp4&height=1920&hq=true&width=1200" );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with date, imageScale, layers, eventLabels, and height provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
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

    it('should return response code 200 with events provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    events: "[AR,HMI_HARP;SPoCA,1],[CH,all,1]"
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

    it('should return response code 200 with scale provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    scale: true
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

    it('should return response code 200 with scaleType provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    scaleType: "earth"
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

    it('should return response code 200 with scaleX provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    scaleX: -1000
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

    it('should return response code 200 with scaleX provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    scaleY: -500
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

    it('should return response code 200 with width provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    width: 1920
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

    it('should return response code 200 with x0 provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    x0: 1
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

    it('should return response code 200 with y0 provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    y0: 1
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

    it('should return response code 200 with x1 provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    x1: -5000
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

    it('should return response code 200 with y1 provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    y1: -5000
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

    it('should return response code 200 with x2 provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    x2: 5000
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
    it('should return response code 200 with y2 provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    y2: 5000
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

    it('should return response code 200 with watermark provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    watermark: true
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

    it('should return response code 200 with callback provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
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

    it('should return response code 200 with display provided takeScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.takeScreenshot({
                    date: "2014-01-01T23:59:59",
                    imageScale: 2.4204409,
                    layers: "[SDO,AIA,AIA,335,1,100]",
                    eventLabels: false,
                    height: 1200,
                    display: true
                });

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r, "https://api.helioviewer.org/v2/takeScreenshot/?date=014-01-01T23:59:59Z&imageScale=.4204409&layers=[SDO,AIA,AIA,335,1,100]&eventLabels=false&height=1200&display=true" );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with display provided downloadScreenshot()', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = helioviewer.downloadScreenshot(3240748);

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            var file = fs.readFileSync("./3240748.png");
            assert.pathExists(file.toString(), "File exists");
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
});

