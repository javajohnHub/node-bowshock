let asterank = require('../index.js').asterank;
let chai = require('chai');

var assert = chai.assert;

describe('Asterank', function() {
    it('should return response code 200 with full args', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                let r = asterank(
                    query={"e": {"$lt": 0.1},
                        "i": {"$lt": 4},
                        "a": {"$lt": 1.5}},
                    limit=1);
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

});