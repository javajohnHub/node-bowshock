var earth = require('../index.js').earth;
var chai = require('chai');

var assert = chai.assert;

describe('Earth', function() {
    it('should return json with full args imagery endpoint', function(done) {
        earth.imagery({lon:100.75,
            lat:1.5,
            date:"2015-02-02",
            cloud_score:true})
            .then(function(data){
                assert.containSubset(JSON.parse(data), {id: "LC8_L1T_TOA/LC81270592015038LGN00"});
                done();

            }).catch(done);

    });
    it('should return json with full args assets endpoint', function(done) {
        earth.assets({lon:100.75, lat:1.5, begin:"2014-02-01", end: "2015-02-11"})
            .then(function(data){
                assert.containSubset(JSON.parse(data), {results: [ { date: "2014-02-04T03:30:01", id: "LC8_L1T_TOA/LC81270592014035LGN00"}]});
                done();

            }).catch(done);

    });
});
