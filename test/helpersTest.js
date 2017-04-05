var helpers = require('../index.js').helpers;
var chai = require('chai');

var assert = chai.assert;

describe('Helpers', function() {
    it('should throw error if date is not valid validate_year', function() {
        assert.throws(function () { helpers.validate_year("201-12-03") }, "Incorrect date format, should be YYYY");

    });

    it('should throw error if date is not valid', function() {
        assert.throws(function () { helpers.format_date("201-12-03") }, "Incorrect date format, should be YYYY");

    });


    it('should reformat date', function() {
        r = helpers.format_date("2017-12-03");
        assert.equal(r.toString(), "2017/12/03" );

    });
});