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
});