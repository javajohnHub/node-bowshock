"use strict";
let techport = require('../index.js').techport;
let chai = require('chai');
let expect = chai.expect;
let chaiXml = require('chai-xml');
chai.use(chaiXml);

describe('Techport', function() {
    it('should return json with no args ', function(done) {
        this.timeout(10000);
        techport()
            .then(function(data){
                expect(data).xml.to.be.valid();
                done();

            }).catch(done);

    });
    it('should return json with id provided ', function(done) {
        techport(4795)
            .then(function(data){
                expect(data).xml.to.be.valid();
                done();

            }).catch(done);

    });
});