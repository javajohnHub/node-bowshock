var patents = require('../index.js').patents;
var chai = require('chai');
var chaiSubset = require('chai-subset');
var assert = chai.assert;
chai.use(chaiSubset);

var assert = chai.assert;

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