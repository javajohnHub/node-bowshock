"use strict";
let moment = require('moment');
let pd = require('pretty-data').pd;
let fs = require('fs');
require('dotenv').config();

let helpers = {
    getJSON (url) {
        // return new pending promise
        if(this.logging() === 'true'){
            console.log("Dispatching HTTP GET Request : ", url);
        }
        return new Promise((resolve, reject) => {
            // select http or https module, depending on reqested url
            const lib = url.startsWith('https') ? require('https') : require('http');
            const request = lib.get(url, (response) => {
                // handle http errors
                if (response.statusCode < 200 || response.statusCode > 299) {
                    reject(new Error('Failed to load page, status code: ' + response.statusCode));
                }
                if(this.logging() === 'true'){
                    console.log("Status : ", response.statusCode);
                }
                // temporary data holder
                const body = [];
                // on every content chunk, push it to the data array
                response.on('data', (chunk) => {body.push(chunk);});
                // we are done, resolve promise with those joined chunks
                response.on('end', () => {
                    fs.writeFile('./log.json', pd.json(body.join('')), (err) => {
                        if(err) throw err;
                    });
                    if(this.logging() === 'true'){
                        console.log('body:', pd.json(body.join('')));

                    }
                    resolve(body.join(''));
                })


            });
            // handle connection errors of the request
            request.on('error', (err) => reject(err))
        })
    },
    getXML (url) {
        // return new pending promise
        if(this.logging() === 'true'){
            console.log("Dispatching HTTP GET Request : ", url);
        }
        return new Promise((resolve, reject) => {
            // select http or https module, depending on reqested url
            const lib = url.startsWith('https') ? require('https') : require('http');
            const request = lib.get(url, (response) => {
                // handle http errors
                if (response.statusCode < 200 || response.statusCode > 299) {
                    reject(new Error('Failed to load page, status code: ' + response.statusCode));
                }
                if(this.logging() === 'true'){
                    console.log("Status : ", response.statusCode);
                }
                // temporary data holder
                const body = [];
                // on every content chunk, push it to the data array
                response.on('data', (chunk) => {body.push(chunk);});
                // we are done, resolve promise with those joined chunks
                response.on('end', () => {
                    fs.writeFile('./log.xml', pd.xml(body.join('')), (err) => {
                        if(err) throw err;
                    });
                    if(this.logging() === 'true'){
                        console.log('body:', pd.xml(body.join('')));

                    }
                    resolve(body.join(''));
                })


            });
            // handle connection errors of the request
            request.on('error', (err) => reject(err))
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
        this.vali_date(date);
        return date.replace(/-/g, "/");

    }


};

module.exports = helpers;
//helpers.vali_date("2017-12-03");
//helpers.validate_year("2017");
//helpers.validate_iso8601("2014-01-01T23:59:59");


