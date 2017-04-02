var ssd = require('../index.js').ssd;
var chai = require('chai');

var assert = chai.assert;

describe('SSD', function() {
    it('should return response code 200 with no args', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad();
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with date_min provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({date_min:"2014-01-01"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with date_min and date_max provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({date_min:"2014-01-01", date_max: "2017-03-11"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with dist_min provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ dist_min: 0.05});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with dist_max provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ dist_max: 0.05});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with h_min provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ h_min: 22});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with h_max provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ h_max: 22});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with v_inf_min provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ v_inf_min: 5});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with v_inf_max provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ v_inf_max: 5});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with v_rel_min provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ v_rel_min: 5});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with v_rel_max provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ v_rel_max: 5});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with class provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ class: "ATE"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with pha provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ pha: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with nea provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ nea: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with comet provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ comet: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with neo provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ neo: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with kind provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ kind: "a"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with spk provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ spk: 2000433});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with des provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ des: 433});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with body provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ body: "Earth"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with sort provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ sort: "date"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with limit provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ limit: 5});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with fullname provided cad', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.cad({ fullname: true});
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