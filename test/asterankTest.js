"use strict";
let asterank = require('../index.js').asterank;
let chai = require('chai');

let assert = chai.assert;

describe('Asterank', function() {
    it('should return json data', function (done) {
        asterank({query: {"e":{"$lt":0.1},"i":{"$lt":4},"a":{"$lt":1.5}}, limit: 10}).then(function (data) {
            assert.containSubset(JSON.parse(data)[0], {id: "a0138911"});
            done();
        }).catch(done);
    });
});