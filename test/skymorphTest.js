var skymorph = require('../index.js').skymorph;
var chai = require('chai');
var chaiSubset = require('chai-subset');
var assert = chai.assert;
chai.use(chaiSubset);

var assert = chai.assert;

describe('Skymorph', function() {
    it('should return json with no args ', function(done) {
        skymorph.search_target_obj("J99TS7A")
            .then(function(data){
                assert.containSubset(JSON.parse(data), {results: []});
                done();

            }).catch(done);

    });
});