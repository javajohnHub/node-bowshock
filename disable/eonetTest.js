"use strict";
let eonet = require('../index.js').eonet;
let chai = require('chai');
let assert = chai.assert;

describe('EONET', function() {
    it('should return json with no args events endpoint', function(done) {
        eonet.events().then(function(data) {
            assert.containSubset(JSON.parse(data), {description: "Natural events from EONET."});
            done()
        })
        .catch(done);

    });
    it('should return json with full args events endpoint', function(done) {
        eonet.events({source: "InciWeb,EO",status: "closed",limit: 5, days:25}).then(function(data) {
            assert.containSubset(JSON.parse(data), {description: "Natural events from EONET."});
            done()
        })
            .catch(done);

    });
    it('should return json with no args categories endpoint', function(done) {
        eonet.categories()
            .then(function(data){
                assert.containSubset(JSON.parse(data), {title: "EONET Event Categories"});
                done();

            }).catch(done);

    });
    it('should return json with full args categories endpoint', function(done) {
        eonet.categories({id:8, source: "InciWeb,EO",status: "open",limit: 5, days:25})
            .then(function(data){
                assert.containSubset(JSON.parse(data), {description: "Wildfires includes all nature of fire, including forest and plains fires, as well as urban and industrial fire events. Fires may be naturally caused or manmade."});
                done();

            }).catch(done);

    });

    it('should return json with id provided layers endpoint', function(done) {
        eonet.layers(8)
            .then(function(data){
                assert.containSubset(JSON.parse(data), {title: "EONET Web Service Layers"});
                done();

            }).catch(done);

    });
});