"use strict";
let skymorph = require('../index.js').skymorph;
let chai = require('chai');
let chaiSubset = require('chai-subset');
let assert = chai.assert;
let expect = chai.expect;
chai.use(chaiSubset);

describe('Skymorph', function() {
    it('should return json with no args ', function(done) {
        skymorph.search_target_obj("J99TS7A")
            .then(function(data){
                assert.containSubset(JSON.parse(data), {results: []});
                done();

            }).catch(done);

    });
    it('should return json with key args ', function(done) {
        let r = skymorph.search_image("|001204124410|51882.530787037|129.062741402712|4.64001695570385|128.337645|4.0726|20.70|-4.28|-11.08|n.a.|n.a.|n.a.|71.9154214757038|547.287989060186|y|");
        expect(r).to.equal("http://asterank.com/api/skymorph/image?key=|001204124410|51882.530787037|129.062741402712|4.64001695570385|128.337645|4.0726|20.70|-4.28|-11.08|n.a.|n.a.|n.a.|71.9154214757038|547.287989060186|y|")
        done();

    });
});