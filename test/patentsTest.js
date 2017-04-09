"use strict";
let patents = require('../index.js').patents;
let chai = require('chai');
let chaiSubset = require('chai-subset');
let assert = chai.assert;
chai.use(chaiSubset);

let assert = chai.assert;

describe('Patents', function() {
    it('should return json with no args ', function(done) {
        patents()
            .then(function(data){
                assert.containSubset(JSON.parse(data), {results: []});
                done();

            }).catch(done);

    });

    it('should return json with all args ', function(done) {
        patents({
            query: "temperature",
            concept_tags: true,
            limit: 10
        })
            .then(function(data){
                assert.containSubset(JSON.parse(data), {results: []});
                done();

            }).catch(done);

    });
});