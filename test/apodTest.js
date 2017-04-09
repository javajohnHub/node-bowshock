"use strict";
let apod = require('../index.js').apod;
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
let chaiSubset = require('chai-subset');
chai.use(chaiSubset);

describe('Apod', function() {
    it('should return json data with no args passed', function (done) {
        apod().then(function(data){
            expect(JSON.parse(data)).to.include.keys("date");
            done();

        }).catch(done);

    });

    it('should return json data with date passed', function (done) {
        apod("2017-03-11").then(function(data){
            assert.containSubset(JSON.parse(data), {date: "2017-03-11"});
            done();

        }).catch(done);

    });

    it('should return json data with date and concept_tags passed', function (done) {
        apod("2017-03-11", true).then(function(data){
            assert.containSubset(JSON.parse(data), {date: "2017-03-11"});
            done();

        }).catch(done);

    });
});