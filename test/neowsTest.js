"use strict";
let neows = require('../index.js').neows;
let chai = require('chai');
let chaiSubset = require('chai-subset');
let assert = chai.assert;
chai.use(chaiSubset);

describe('NeoWs', function() {
    it('should return json data with no args today', function (done) {
        neows.today().then(function (data) {
            assert.containSubset(JSON.parse(data), {
                near_earth_objects: {}});
            done();
        }).catch(done);
    });

    it('should return json data with start_date and end_date feed', function (done) {
        neows.feed("2015-06-03", "2015-06-03").then(function (data) {
            assert.containSubset(JSON.parse(data), {
                near_earth_objects: {}});
            done();
        }).catch(done);
    });

    it('should return json data with no args browse', function (done) {
        neows.browse().then(function (data) {
            assert.containSubset(JSON.parse(data), {
                near_earth_objects: {}});
            done();
        }).catch(done);
    });

    it('should return json data with no args stats', function (done) {
        neows.stats().then(function (data) {
            assert.containSubset(JSON.parse(data), {
                source: "All the NEO data is from NASA JPL NEO team."});
            done();
        }).catch(done);
    });

    it('should return json data with id provided lookup', function (done) {
        neows.lookup(3542519).then(function (data) {
            assert.containSubset(JSON.parse(data), {
                links: {}});
            done();
        }).catch(done);
    });
});