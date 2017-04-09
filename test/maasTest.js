"use strict";
let maas = require('../index.js').maas;
let chai = require('chai');
let chaiSubset = require('chai-subset');
let assert = chai.assert;
chai.use(chaiSubset);

describe('Maas', function() {
    it('should return json data with no args maas_latest', function (done) {
        maas.maas_latest().then(function (data) {
            assert.containSubset(JSON.parse(data), {
                report: {}})
            done();
        }).catch(done);
    });

    it('should return json data with begin and end provided maas_archive', function (done) {
        maas.maas_archive("2015-03-19", "2017-03-19").then(function (data) {
            assert.containSubset(JSON.parse(data), {next: "http://marsweather.ingenology.com/v1/archive/?terrestrial_date_end=2017-03-19&terrestrial_date_start=2015-03-19&page=2"})
            done();
        }).catch(done);
    });
});