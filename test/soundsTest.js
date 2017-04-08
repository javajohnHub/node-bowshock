var sounds = require('../index.js').sounds;
var chai = require('chai');

var assert = chai.assert;

describe('Sounds', function() {
    it('should return response code 200 with query provided', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = sounds("apollo");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with query && limit', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = sounds("apollo", 5);
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
