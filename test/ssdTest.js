var ssd = require('../index.js').ssd;
var chai = require('chai');
var chaiSubset = require('chai-subset');
var assert = chai.assert;
chai.use(chaiSubset);

var assert = chai.assert;

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
    })
});