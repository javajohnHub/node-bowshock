"use strict";
let sounds = require('../index.js').sounds;
let chai = require('chai');
let chaiSubset = require('chai-subset');
let assert = chai.assert;
chai.use(chaiSubset);

describe('Sounds', function() {
    it('should return json with no args ', function(done) {
        sounds("Apollo", 10)
            .then(function(data){
                assert.containSubset(JSON.parse(data), {results: []});
                done();

            }).catch(done);

    });
});