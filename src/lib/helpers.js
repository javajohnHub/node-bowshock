let moment = require('moment');
var async = require('async');
let request = require('request');
var pd = require('pretty-data').pd;
var fs = require('fs');

require('dotenv').config();

let helpers = {
    dispatch_http_get: function(url){
        let destination = fs.createWriteStream('./log.json');
        console.log("Dispatching HTTP GET Request : ", url);
        request(url, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', pd.json(body));
        }).pipe(destination);
    },
    dispatch_http_get_xml: function(url){
        let destination = fs.createWriteStream('./log.xml');
        console.log("Dispatching HTTP GET Request : ", url);
        request(url, function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', pd.xml(body));
        }).pipe(destination);
    },
    vali_date: function(date_text) {
        if(moment(date_text,'YYYY-MM-DD', true).isValid()){
            return date_text;
        }else{
            throw "Incorrect date format, should be YYYY-MM-DD";
        }
    },

    validate_year: function(date_text) {
        if(moment(date_text,'YYYY', true).isValid()){
            return date_text;
        }else{
            throw "Incorrect date format, should be YYYY";
        }
    },

    validate_iso8601(date_text){
        if(moment(date_text,'YYYY-MM-DDTHH:mm:ss', true).isValid()){
            return date_text;
        }else{
            throw "Incorrect date format, should be YYYY-MM-DDTHH:mm:ss";
        }
    },

    nasa_api_key: function() {
        return process.env.NASA_API_KEY;
    },


};
module.exports = helpers;

//helpers.vali_date("2017-12-03");
//helpers.validate_year("2017");
//helpers.validate_iso8601("2014-01-01T23:59:59");
