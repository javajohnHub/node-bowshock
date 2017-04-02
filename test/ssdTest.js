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

    //END of CAD


    it('should return response code 200 with no args fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs();
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with date_min provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({date_min:"2014-01-01"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with date_min and date_max provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({date_min:"2014-01-01", date_max: "2017-03-11"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with energy_min provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ energy_min: 0.05});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with energy_max provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ energy_max: 10});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with impact_e_min provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ impact_e_min: .08});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with impact_e_max provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ impact_e_max: 10});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with vel_min provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ vel_min: 18});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with vel_max provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ vel_max: 20});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with alt_min provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ alt_min: 5});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with alt_max provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ alt_max: 5});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with req_loc provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ req_loc: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with req_alt provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ req_alt: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with req_vel provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ req_vel: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with req_vel_comp provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ req_vel_comp: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with vel_comp provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ vel_comp: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with sort provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ sort: "date"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with limit provided fireballs', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.fireballs({ limit: 5});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    //end fireballs

    it('should return response code 200 with dv provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ dv: 12});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with dur provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ dur: 450});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with stay provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ stay: 8});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with launch provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ launch: "2015-2020"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with h provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ h: 16});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with occ provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ occ: 3});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with spk provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ spk: 2000433});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with des provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ des: "141P"});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with plot provided nhats', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.nhats({ plot: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    //end nhats


    it('should return response code 200 with spk provided sentry', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.sentry({ spk: 2029075});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with des provided sentry', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.sentry({ sdes: 29075});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });
    it('should return response code 200 with h_max provided sentry', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.sentry({ h_max: 50});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with ps_min provided sentry', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.sentry({ ps_min: 10});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with ip_min provided sentry', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.sentry({ ip_min: 1e-3});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000 );
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with days provided sentry', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.sentry({ days: 6});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with all provided sentry', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.sentry({ all: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

    it('should return response code 200 with removed provided sentry', function(done) {
        setTimeout( function () {
            // Called from the event loop, not it()
            // So only the event loop could capture uncaught exceptions from here
            try {
                var r = ssd.sentry({ removed: true});
                done(); // success: call done with no parameter to indicate that it() is done()
            } catch( e ) {
                done( e ); // failure: call done with an error Object to indicate that it() failed
            }
            assert.equal(r.statusCode, 200);
        }, 1000);
        // returns immediately after setting timeout
        // so it() can no longer catch

    });

});