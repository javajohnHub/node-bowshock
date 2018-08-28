"use strict";

const helpers = require("./helpers");
let satelliteSituationCenter = {
  getWADL() {
    let uri = `/application.wadl`;
    return of(helpers.getXML(uri).then((data) => {
      return data;
  }))
  },

  getObservatories() {
    let uri = `/observatories`;
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },
  getSpaseObservatories() {
    let uri = `/spaseObservatories`;
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  getGroundStations() {
    let uri = `/groundStations`;
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  getLocations() {
    let uri = `/locations`;
    return of(helpers.getJSON(uri, 'POST').then((data) => {
      return data;
  }))
  },

  getGraphs() {
    let uri = `/graphs`;
    return of(helpers.getJSON(uri, 'POST').then((data) => {
      return data;
  }))
  },

  getConjunctions() {
    let uri = `/conjunctions`;
    return of(helpers.getJSON(uri, 'POST').then((data) => {
      return data;
  }))
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