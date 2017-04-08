var neows = require('../index.js').neows;
var expect = require('chai').expect;
var chai = require('chai');



var assert = chai.assert;

describe('NeoWs', function () {
    it('returns todays neow data', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = neows.today();
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {
                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(200, r.statusCode);
        }, 100);
        // returns immediately after setting timeout
        // so it() can no longer catch
    });

    it('returns all neow data', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = neows.browse();
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {
                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(200, r.statusCode);
        }, 100);
        // returns immediately after setting timeout
        // so it() can no longer catch
    });

    it('returns neows stats', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = neows.stats();
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {
                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(200, r.statusCode);
        }, 100);
        // returns immediately after setting timeout
        // so it() can no longer catch
    });

    it('should return response code 200 with no args today()', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = neows.today();
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {
                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(200, r.statusCode);
        }, 100);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with start date feed()', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = neows.feed("2015-06-03");

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {

                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(200, r.statusCode);
        }, 100);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with start date and end date feed()', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = neows.feed("2015-06-03", "2017-03-11");

                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {

                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(200, r.statusCode);
        }, 100);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with id provided lookup()', function (done) {
        setTimeout(function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = neows.lookup(3542519);
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch (e) {
                done(e); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(200, r.statusCode);
        }, 100);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
})
