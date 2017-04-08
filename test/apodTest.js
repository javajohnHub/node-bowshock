"use strict";
let apod = require('../index.js').apod;
let chai = require('chai');
let assert = chai.assert;
let chaiSubset = require('chai-subset');
chai.use(chaiSubset);

describe('Apod', function() {
    it('should return json data with no args passed', function (done) {
        var today = new Date();
        var dd = today.getDate()+1;
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd='0'+dd
        }

        if(mm<10) {
            mm='0'+mm
        }

        today = yyyy+'-'+mm+'-'+dd;
        apod().then(function(data){
            assert.containSubset(JSON.parse(data), {date: today});
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