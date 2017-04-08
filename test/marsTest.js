var mars = require('../index.js').mars;
var chai = require('chai');
var chaiSubset = require('chai-subset');
var assert = chai.assert;
chai.use(chaiSubset);

describe('Mars', function() {
    it('should return json data with date provided curiosity', function (done) {
        mars.curiosity("2017-12-03").then(function (data) {
            assert.containSubset(JSON.parse(data), {
                photos: []})
            done();
        }).catch(done);
    });

    it('should return json data with date provided opportunity', function (done) {
        mars.opportunity("2017-12-03").then(function (data) {
            assert.containSubset(JSON.parse(data), {
                photos: []})
            done();
        }).catch(done);
    });

    it('should return json data with date provided opportunity', function (done) {
        mars.spirit("2017-12-03").then(function (data) {
            assert.containSubset(JSON.parse(data), {
                photos: []})
            done();
        }).catch(done);
    });
});