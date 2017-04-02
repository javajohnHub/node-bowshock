var mars = require('../index.js').mars;
var chai = require('chai');

var assert = chai.assert;

describe('Mars Rovers', function () {
    it('should return response code 200 with date provided curiosity()', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = mars.curiosity("2017-03-11");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {
                console.log(e);
                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1500);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with date provided opportunity()', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = mars.opportunity("2015-06-03");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {
                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1500);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

   it('should return response code 200 with date provided spirit()', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = mars.spirit("2015-06-03");
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {
                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 404);
        }, 1500);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

});