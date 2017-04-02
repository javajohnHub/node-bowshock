var apod = require('../index.js').apod;
var chai = require('chai');

var assert = chai.assert;

describe('Apod', function() {
    it('should return response code 200 with full args', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = apod("2015-02-02", concept_tags=true);
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with no args', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = apod();
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with just date', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = apod("2015-02-02");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with full args', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = apod("2015-02-02", concept_tags=true);
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should throw an error if date format is incorrect', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {

                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.throws(function () { apod("2015-02") }, Error, "Incorrect date format, should be YYYY-MM-DD");
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
});
