var eva = require('../index.js').eva;
var chai = require('chai');

var assert = chai.assert;

describe('EVA', function() {
    it('should return json with no args ', function(done) {
        eva()
            .then(function(data){
                assert.containSubset(JSON.parse(data)[0], {eva: "1"});
                done();

            }).catch(done);

    });
});