"use strict";

const helpers = require("./helpers");
let epic = {
  natural() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural";
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  naturalAll() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural/all";
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  naturalDate(date) {
    let uri = `https://epic.gsfc.nasa.gov/api/natural/date/${date}`;
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  naturalAvailable() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural/available";
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  createNaturalImageLinks(arr, date) {
    let linkArr = [];
    arr.forEach(image => {
      let img = `${image.image}.png`;
      let archive = `https://epic.gsfc.nasa.gov/archive/natural/${date.year}/${
        date.month
      }/${date.day}/png/${img}`;
      linkArr.push(archive);
    });
    return linkArr;
  },

  enhanced() {
    let uri = "https://epic.gsfc.nasa.gov/api/enhanced";
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  enhancedAll() {
    let uri = "https://epic.gsfc.nasa.gov/api/enhanced/all";
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  enhancedDate(date) {
    let uri = `https://epic.gsfc.nasa.gov/api/enhanced/date/${date}`;
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  enhancedAvailable() {
    let uri = "https://epic.gsfc.nasa.gov/api/enhyanced/available";
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  createEnhancedImageLinks(arr, date) {
    let linkArr = [];
    arr.forEach(image => {
      let img = `${image.image}.png`;
      let archive = `https://epic.gsfc.nasa.gov/archive/enhanced/${date.year}/${
        date.month
      }/${date.day}/png/${img}`;
      linkArr.push(archive);
    });
    return linkArr;
  }
};

module.exports = epic;

//epic.natural();
//epic.naturalAll()
//epic.naturalDate('2018-5-15')
//epic.naturalAvailable()
//epic.enhanced()
//epic.enhancedAll()
//epic.enhancedDate('2018-5-15')
//epic.enhancedAvailable()
