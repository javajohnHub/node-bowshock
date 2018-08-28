"use strict";

const helpers = require("./helpers");
let satelliteSituationCenter = {
  getWADL() {
    let uri = `/application.wadl`;
    return helpers.getXML(uri)
  },

  getObservatories() {
    let uri = `/observatories`;
    return helpers.getJSON(uri, 'GET')
  },
  getSpaseObservatories() {
    let uri = `/spaseObservatories`;
    return helpers.getJSON(uri, 'GET')
  },

  getGroundStations() {
    let uri = `/groundStations`;
    return helpers.getJSON(uri, 'GET')
  },

  getLocations() {
    let uri = `/locations`;
    return helpers.getJSON(uri, 'POST')
  },

  getGraphs() {
    let uri = `/graphs`;
    return helpers.getJSON(uri, 'POST')
  },

  getConjunctions() {
    let uri = `/conjunctions`;
    return helpers.getJSON(uri, 'POST')
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