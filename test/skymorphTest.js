"use strict";
let skymorph = require('../index.js').skymorph;
let chai = require('chai');
let chaiSubset = require('chai-subset');
let assert = chai.assert;
chai.use(chaiSubset);

describe('Skymorph', function() {
    it('should return json with no args ', function(done) {
        skymorph.search_target_obj("J99TS7A")
            .then(function(data){
                assert.containSubset(JSON.parse(data), {results: []});
                done();

            }).catch(done);

    });
});