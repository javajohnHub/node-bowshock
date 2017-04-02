var asterank = require('../index.js').asterank;
var chai = require('chai');

var assert = chai.assert;

describe('Asterank', function() {
    it('should return response code 200 with full args', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = asterank(
                    {"e": {"$lt": 0.1},
                        "i": {"$lt": 4},
                        "a": {"$lt": 1.5}},
                    1);
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should throw an error if limit is not provided', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {

                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.throws(function () { asterank(query="hello") }, Error, "limit= param is missing, expecting int")

        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should throw an error if query parameter is missing', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {

                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
    assert.throws(function () { asterank() }, Error, "query= param is missing, expecting json data format.");
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

});