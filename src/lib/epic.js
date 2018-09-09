"use strict";

const helpers = require("./helpers");
let epic = {
  natural() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural";
    return helpers.getJSON(uri, "GET");
  },

  naturalAll() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural/all";
    return helpers.getJSON(uri, "GET");
  },

  naturalDate(date) {
    let uri = `https://epic.gsfc.nasa.gov/api/natural/date/${date}`;
    return helpers.getJSON(uri, "GET");
  },

  naturalAvailable() {
    let uri = "https://epic.gsfc.nasa.gov/api/natural/available";
    return helpers.getJSON(uri, "GET");
  },

  createNaturalImageLink(image, date) {
    let img = `${image}.png`;
    let archive = `https://epic.gsfc.nasa.gov/archive/natural/${date.year}/${
      date.month
    }/${date.day}/png/${img}`;
    new Promise(function(resolve, reject) {
      if (archive) {
        resolve(archive);
      } else {
        reject();
      }
    });
  },

  enhanced() {
    let uri = "https://epic.gsfc.nasa.gov/api/enhanced";
    return helpers.getJSON(uri, "GET");
  },

  enhancedAll() {
    let uri = "https://epic.gsfc.nasa.gov/api/enhanced/all";
    return helpers.getJSON(uri, "GET");
  },

  enhancedDate(date) {
    let uri = `https://epic.gsfc.nasa.gov/api/enhanced/date/${date}`;
    return helpers.getJSON(uri, "GET");
  },

  enhancedAvailable() {
    let uri = "https://epic.gsfc.nasa.gov/api/enhyanced/available";
    return helpers.getJSON(uri, "GET");
  },

  createEnhancedImageLinks(image, date) {
    let img = `${image.image}.png`;
    let archive = `https://epic.gsfc.nasa.gov/archive/enhanced/${date.year}/${
      date.month
    }/${date.day}/png/${img}`;
    return new Promise(function(resolve, reject) {
      if (archive) {
        resolve(archive);
      } else {
        reject();
      }
    });
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
