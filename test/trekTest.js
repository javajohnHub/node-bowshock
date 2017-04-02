var trek = require('../index.js').trek;
var chai = require('chai');

var assert = chai.assert;

describe('Trek', function() {
    it('should return response code 200 with id provided mars', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = trek.mars("curiosity_ctx_mosaic");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
        it('should return response code 200 with id provided vesta', function(done) {
            setTimeout( function () {
                // Called from the event loop, not it()
                // So only the event loop could capture uncaught exceptions from here
                try {
                    var r = trek.vesta("global_LAMO");
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