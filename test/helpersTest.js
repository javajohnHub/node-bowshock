var helpers = require('../index.js').helpers;
var chai = require('chai');

var assert = chai.assert;

describe('Helpers', function() {
    it('should throw error if date is not valid validate_year', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.throws(function () { helpers.validate_year("201-12-03") }, Error, "Incorrect date format, should be YYYY");
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should throw error if date is not valid', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.throws(function () { helpers.format_date("201-12-03") }, Error, "Incorrect date format, should be YYYY");
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });


    it('should reformat date', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                r = helpers.format_date("2017-12-03");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r, "2017/12/03" );
        }, 100 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
});