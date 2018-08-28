"use strict";
let ssd = require('../index.js').ssd;
let chai = require('chai');
let chaiSubset = require('chai-subset');
let assert = chai.assert;
chai.use(chaiSubset);

describe('SSD', function() {
    describe('CAD', function() {
        it('should return json with no args ', function (done) {
            this.timeout(5000);
            ssd.cad()
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with all args ', function (done) {
            this.timeout(10000);
            ssd.cad({
                date_min: "2015-03-01",
                date_max: "2017-03-01",
                dist_min: "10LD",
                dist_max: "200LD",
                h_min: 1,
                h_max: 99,
                v_inf_min: 1,
                v_inf_max: 99,
                v_rel_min: 1,
                v_rel_max: 99,
                class: "ATE",
                pha: false,
                nea: false,
                comet: false,
                nea_comet: false,
                neo: false,
                kind: "a",
                //spk: 2000433,
                //des: "433",
                body: "Earth",
                sort: "date",
                limit: 100,
                fullname: true
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });
        it('should return json with spk args ', function (done) {
            this.timeout(10000);
            ssd.cad({spk: 2000433})
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with des args ', function (done) {
            this.timeout(10000);
            ssd.cad({des: "433"})
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with pha args ', function (done) {
            this.timeout(10000);
            ssd.cad({pha: true})
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });
        it('should return json with nea args ', function (done) {
            this.timeout(10000);
            ssd.cad({nea: true})
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });
        it('should return json with comet args ', function (done) {
            this.timeout(10000);
            ssd.cad({comet: true})
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });
        it('should return json with nea-comet args ', function (done) {
            this.timeout(10000);
            ssd.cad({nea_comet: true})
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });
        it('should return json with neo args ', function (done) {
            this.timeout(10000);
            ssd.cad({neo: true})
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL SBDB Close Approach Data API"
                        },
                    });
                    done();

                }).catch(done);

        });
    });

    describe('Fireballs', function(){

        it('should return json with no args ', function (done) {
            this.timeout(10000);
            ssd.fireballs()
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL Fireball Data API"
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with all args ', function (done) {
            this.timeout(10000);
            ssd.fireballs({
                date_min: "2015-03-01",
                date_max: "2017-03-01",
                energy_min: 1,
                energy_max: 99,
                impact_e_min: 1,
                impact_e_max: 99,
                vel_min: 1,
                vel_max: 99,
                req_loc: true,
                req_alt: true,
                req_vel: true,
                req_vel_comp: true,
                vel_comp: true,
                sort: "date",
                limit: 100
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL Fireball Data API"
                        },
                    });
                    done();

                }).catch(done);

        });

    });

    describe('NHATS', function() {

        it('should return json with no args ', function (done) {
            this.timeout(10000);
            ssd.nhats()
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL NHATS Data API",
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with all args ', function (done) {
            this.timeout(10000);
            ssd.nhats({
                dv: 12,
                dur: 450,
                stay: 16,
                launch: "2015-2020",
                h: 30,
                occ: 8,
                //spk: 2000433,
                //des: "433",
                plot: true
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL NHATS Data API",
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with spk args ', function (done) {
            this.timeout(10000);
            ssd.nhats({
                spk: 2000433,
                plot: true
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        error: "specified NHATS object not found"
                    });
                    done();

                }).catch(done);

        });

        it('should return json with des args ', function (done) {
            this.timeout(10000);
            ssd.nhats({
                des: "433",
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data),
                    {
                        error: "specified NHATS object not found"
                    }
                    );
                    done();

                }).catch(done);

        });
    });

    describe("Sentry", function (done) {
        it('should return json with no args ', function (done) {
            this.timeout(10000);
            ssd.sentry()
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL Sentry Data API",
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with all args ', function (done) {
            this.timeout(10000);
            ssd.sentry({
                //spk: 2029075,
                //des: 29075,
                h_max: 50,
                ps_min: 10,
                ip_min: 1e-3,
                days: 7,
                all: true,
                //removed: false
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL Sentry Data API",
                        },
                    });
                    done();

                }).catch(done);

        });
        it('should return json with spk args ', function (done) {
            this.timeout(10000);
            ssd.sentry({
                spk: 2029075
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL Sentry Data API",
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with des args ', function (done) {
            this.timeout(10000);
            ssd.sentry({
                des: 29075
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL Sentry Data API",
                        },
                    });
                    done();

                }).catch(done);

        });

        it('should return json with removed args ', function (done) {
            this.timeout(10000);
            ssd.sentry({
                removed: true
            })
                .then(function (data) {
                    assert.containSubset(JSON.parse(data), {
                        signature: {
                            source: "NASA/JPL Sentry Data API",
                        },
                    });
                    done();

                }).catch(done);

        });
    });
});

