var sounds = require('../index.js').sounds;
var chai = require('chai');
var chaiSubset = require('chai-subset');
var assert = chai.assert;
chai.use(chaiSubset);

var assert = chai.assert;

describe('Sounds', function() {
    it('should return json with no args ', function(done) {
        sounds("Apollo", 10)
            .then(function(data){
                assert.containSubset(JSON.parse(data), {results: []});
                done();

            }).catch(done);

    });
});