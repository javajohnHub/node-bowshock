var trek = require('../index.js').trek;
var chai = require('chai');
var expect = chai.expect;

var chaiXml = require('chai-xml');
chai.use(chaiXml);

describe('Sounds', function() {
    it('should return json with no args ', function(done) {
        trek.mars("curiosity_ctx_mosaic")
            .then(function(data){
                expect(data).xml.to.be.valid();
                done();

            }).catch(done);

    });
    it('should return json with no args ', function(done) {
        trek.vesta("global_LAMO")
            .then(function(data){
                expect(data).xml.to.be.valid();
                done();

            }).catch(done);

    });
});