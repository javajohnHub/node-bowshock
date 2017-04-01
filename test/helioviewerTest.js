let helioviewer = require('../index.js').helioviewer;
let chai = require('chai');

var assert = chai.assert;

describe('Helioviewer', function() {
    it('should return response code 200 with date provided getjp2image', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                let r = helioviewer.getjp2image({date:"2014-01-01T23:59:59"});
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