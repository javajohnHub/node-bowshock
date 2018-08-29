"use strict";
let moment = require("moment");
let pd = require("pretty-data").pd;
let axios = require("axios");
require("dotenv").config();

let helpers = {
  getJSON(url, type) {
    if (this.logging() === "true") {
      console.log("Dispatching HTTP GET Request : ", url.host || url);
    }
    var instance = axios.create({
      baseURL: "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    if(type == 'GET'){
        return instance
        .get(url)
        .then((response)=> {
          return response.data
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if(type == 'POST'){
        return instance
        .post(url)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  },

  getXML(url) {
    if (this.logging() === "true") {
      console.log("Dispatching HTTP GET Request : ", url);
    }
    var instance = axios.create({
      baseURL: "https://sscweb.sci.gsfc.nasa.gov/WS/sscr/2",
      headers: {
        Accept: "application/xml",
        "Content-Type": "application/xml"
      }
    });
   return instance
      .get(url)
      .then((response) =>{
        return response.data
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  vali_date: function(date_text) {
    if (moment(date_text, "YYYY-MM-DD", true).isValid()) {
      return date_text;
    } else {
      throw `Incorrect date format, should be YYYY-MM-DD you have ${date_text}`;
    }
    
  },

  validate_year: function(date_text) {
    if (moment(date_text, "YYYY", true).isValid()) {
      return date_text;
    } else {
      throw "Incorrect date format, should be YYYY";
    }
  },

  validate_iso8601(date_text) {
    if (moment(date_text, "YYYY-MM-DDTHH:mm:ss", true).isValid()) {
      return date_text;
    } else {
      throw "Incorrect date format, should be YYYY-MM-DDTHH:mm:ss";
    }
  },

  nasa_api_key: function() {
    return process.env.NASA_API_KEY;
  },

  logging: function() {
    return process.env.LOGGER || "false";
  },
  format_date(date) {
    //this.vali_date(date);
    return date.replace(/-/g, "/");
  }
};

module.exports = helpers;
//helpers.vali_date("2017-12-03");
//helpers.validate_year("2017");
//helpers.validate_iso8601("2014-01-01T23:59:59");
