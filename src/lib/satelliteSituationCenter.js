"use strict";

const helpers = require("./helpers");
let satelliteSituationCenter = {
  getWADL() {
    let uri = `/application.wadl`;
    helpers.getXML(uri, 'GET');
  },

  getObservatories() {
    let uri = `/observatories`;
    helpers.getJSON(uri, 'GET');
  },
  getSpaseObservatories() {
    let uri = `/spaseObservatories`;
    helpers.getJSON(uri, 'GET');
  },

  getGroundStations() {
    let uri = `/groundStations`;
    helpers.getJSON(uri, 'GET');
  },

  getLocations() {
    let uri = `/locations`;
    helpers.getJSON(uri, 'POST');
  },

  getGraphs() {
    let uri = `/graphs`;
    helpers.getJSON(uri, 'POST');
  },

  getConjunctions() {
    let uri = `/conjunctions`;
    helpers.getJSON(uri, 'POST');
  }
};

module.exports = satelliteSituationCenter;
//satelliteSituationCenter.getObservatories()

//satelliteSituationCenter.getWADL()

//satelliteSituationCenter.getSpaseObservatories()

//satelliteSituationCenter.getGroundStations();

//satelliteSituationCenter.getLocations()

//satelliteSituationCenter.getGraphs()
// satelliteSituationCenter.getConjunctions()