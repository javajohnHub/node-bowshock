"use strict";

const helpers = require("./helpers");
let epic = {
  natural() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural";
    helpers.getJSON(uri, "GET");
  },

  naturalAll() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural/all";
    helpers.getJSON(uri, "GET");
  },

  naturalDate(date) {
    let uri = `https://epic.gsfc.nasa.gov/api/natural/date/${date}`;
    helpers.getJSON(uri, "GET");
  },

  naturalAvailable() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural/available";
    helpers.getJSON(uri, "GET");
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
    helpers.getJSON(uri, "GET");
  },

  enhancedAll() {
    let uri = "https://epic.gsfc.nasa.gov/api/enhanced/all";
    helpers.getJSON(uri, "GET");
  },

  enhancedDate(date) {
    let uri = `https://epic.gsfc.nasa.gov/api/enhanced/date/${date}`;
    helpers.getJSON(uri, "GET");
  },

  enhancedAvailable() {
    let uri = "https://epic.gsfc.nasa.gov/api/enhyanced/available";
    helpers.getJSON(uri, "GET");
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
