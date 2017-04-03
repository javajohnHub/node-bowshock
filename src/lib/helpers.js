"use strict";
let moment = require('moment');
var request = require('superagent');
let pd = require('pretty-data').pd;
let fs = require('fs');

require('dotenv').config();


let helpers = {
    dispatch_http_get: function(url, callback){

        request
            .get(url)
            .end(function(err, res){
                console.error(err);
                if(!err){
                    var data = res.body;
                    console.log("Dispatching HTTP GET Request : ", url);
                    console.log('error:', err); // Print the error if one occurred
                    console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
                    if(helpers.logging() === 'true'){
                        console.log('body:', pd.json(data));
                    }
                        fs.writeFile('./log.json', pd.json(data), (err) => {
                            if(err) throw err;
                        });
                        callback(null, data);



                }else{
                    callback('Error Occurred!', err);
                }
            })

    },
    dispatch_http_get_xml: function(url, callback){
        request
            .get(url)
            .end(function(err, res){
                if(!err){
                    var data = res.text;
                    console.log("Dispatching HTTP GET Request : ", url);
                    console.log('error:', err); // Print the error if one occurred
                    console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
                    if(helpers.logging() === 'true'){
                        console.log('body:', pd.xml(data));

                    }
                    fs.writeFile('./log.json', pd.json(data), (err) => {
                        if(err) throw err;
                    });
                    callback(null, data);



                }else{
                    callback('Error Occurred!');
                }
            })

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

    logging: function() {
        return process.env.LOGGER || 'false';
    },
    format_date(date){
        try{
            this.vali_date(date);
            return date.replace(/-/g, "/");
        }
        catch(e){
            throw "You must provide a valid date YYYY";
        }

    },
    isEmpty(obj) {
        for(let prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }

        return true;
    }


};
module.exports = helpers;

//helpers.vali_date("2017-12-03");
//helpers.validate_year("2017");
//helpers.validate_iso8601("2014-01-01T23:59:59");

