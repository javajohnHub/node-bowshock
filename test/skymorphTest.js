var skymorph = require('../index.js').skymorph;
var chai = require('chai');

var assert = chai.assert;

describe('Skymorph', function() {
    it('should return response code 200 with id provided', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = skymorph.search_target_obj("J99TS7A");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

});
