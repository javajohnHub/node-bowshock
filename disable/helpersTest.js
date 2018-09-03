"use strict";
let helpers = require("../src/lib/helpers.js");
let chai = require("chai");
let pd = require("pretty-data").pd;
let expect = chai.expect;
let assert = chai.assert;
let chaiXml = require("chai-xml");
chai.use(chaiXml);

describe("Helpers", function() {
  it("should return json data", function(done) {
    helpers
      .getJSON("https://419webdev.site/titles")
      .then(function(data) {
        expect(data).to.deep.equal(
          '[{"zFile":"zork.z5"},{"zFile":"zork2.z5"},{"zFile":"zork3.z5"},{"zFile":"ztuu.z5"}]'
        );
        done();
      })
      .catch();
  });
  it("should return valid xml data", function(done) {
    helpers
      .getXML("https://www.w3schools.com/xml/note.xml")
      .then(function(data) {
        expect(data).xml.to.be.valid();
        done();
      })
      .catch();
  });
  it("should throw error if date is not valid validate_year", function() {
    assert.throws(function() {
      helpers.validate_year("201-12-03");
    }, "Incorrect date format, should be YYYY");
  });
  it("should return date validate_year", function() {
    let r = helpers.validate_year("2017");
    assert.equal(r.toString(), "2017");
  });
  it("should throw error if iso date is not valid", function() {
    assert.throws(function() {
      helpers.validate_iso8601("2014-01-01T23:59");
    }, "Incorrect date format, should be YYYY-MM-DDTHH:mm:ss");
  });
  it("should return date validate_iso8601", function() {
    let r = helpers.validate_iso8601("2014-01-01T23:59:59");
    assert.equal(r.toString(), "2014-01-01T23:59:59");
  });
  it("should throw error if date is not valid", function() {
    assert.throws(function() {
      helpers.vali_date("201-12-03");
    }, "Incorrect date format, should be YYYY");
  });

  it("should reformat date", function() {
    let r = helpers.vali_date("2017-12-03");
    assert.equal(r.toString(), "2017/12/03");
  });
  it("should return NASA_API_KEY", function() {
    let r = helpers.nasa_api_key();
    assert.equal(r.toString(), "TxpAbzBJkgazWhEkL2WIyZW2rsnEFx2Ns7Wmrey0");
  });
});
