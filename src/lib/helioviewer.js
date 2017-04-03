"use strict";
//TODO: Complete helioviewer sdk

/*
http://helioviewer.org/api/docs/v1/
The Helioviewer Project maintains a set of Public APIs with the goal of improving access to solar and heliospheric
datasets to scientists, educators, developers, and the general public. Read below for descriptions of each API
endpoint and examples of usage.
*/
const helpers = require('./helpers');

let helioviewer = {
    getjp2image(object){
    /*
     Helioviewer.org and JHelioviewer operate off of JPEG2000 formatted image data generated from science-quality FITS files. Use the APIs below to interact directly with these intermediary JPEG2000 files.

     Download a JP2 image for the specified datasource that is the closest match in time to the `date` requested.

     Either `sourceId` must be specified, or the combination of `observatory`, `instrument`, `detector`, and `measurement`.

     Request Parameters:

     Parameter	Required	Type	Example	Description
     date	Required	string	2014-01-01T23:59:59Z	Desired date/time of the JP2 image. ISO 8601 combined UTC date and time UTC format.
     sourceId	Optional	number	14	Unique image datasource identifier.
     observatory	Optional	string	SDO	Observatory name.
     instrument	Optional	string	AIA	Instrument name.
     detector	Optional	string	AIA	Detector name.
     measurement	Optional	string	335	Measurement name.
     jpip	Optional	boolean	false	Optionally return a JPIP URI instead of the binary data of the image itself.
     json	Optional	boolean	false	Optionally return a JSON object.


     EXAMPLE: http://helioviewer.org/api/v1/getJP2Image/?date=2014-01-01T23:59:59Z&sourceId=14&jpip=true
     */
    let base_url = 'https://api.helioviewer.org/v2/getJP2Image/?';
    let req_url = '';
    try {

            helpers.validate_iso8601(object.date);
            if (object.date.charAt(-1) !== 'Z') {
                object.date += 'Z';
            }
            base_url += 'date=' + object.date + '&';
    }
        catch(e){
            throw "date is a required parameter";
        }
        if (object.sourceId) {
            base_url += "sourceId=" + object.sourceId + "&";
        }
        req_url += base_url + "json=true&jpip=true";



        return helpers.dispatch_http_get(req_url, function(data){
            return data;
        });

    },
    getjp2header(id){
        /*
         GET /api/v1/getJP2Header/


         Get the XML header embedded in a JPEG2000 image. Includes the FITS header as well as a section of Helioviewer-specific metadata.

         Request Parameters:

         Parameter	Required	Type	Example	Description
         id	Required	number	7654321	Unique JP2 image identifier.
         callback	Optional	string		Wrap the response object in a function call of your choosing.

         Example (A):

         string (XML)

         Example Request:

         http://helioviewer.org/api/v1/getJP2Header/?id=7654321

         */
        return helpers.dispatch_http_get_xml('https://api.helioviewer.org/v2/getJP2Header/?id=' + id, function(data){
            return data;
        });

    },
    getJPX(object){
        let base_url = 'https://api.helioviewer.org/v2/getJPX/?';
        let req_url = '';
        helpers.validate_iso8601(object.startTime);
        if (object.startTime.charAt(-1) !== 'Z') {
                object.startTime += 'Z';
        }

            base_url += 'startTime=' + object.startTime + '&';

        helpers.validate_iso8601(object.endTime);
            if (object.endTime.charAt(-1) !== 'Z') {
                object.endTime += 'Z';
            }

            base_url += 'endTime=' + object.endTime + '&';

        if (object.sourceId) {
            base_url += "sourceId=" + object.sourceId + "&";
        }
        if (object.linked) {
            base_url += "linked=" + object.linked + "&";
        }
        if (object.cadence) {
            base_url += "cadence=" + object.cadence + "&";
        }
        req_url += base_url + "verbose=true&jpip=true";
        return helpers.dispatch_http_get(req_url, function(data){
            return data;
        });
    },
    getJPXClosestToMidPoint(object){
        let base_url = 'https://api.helioviewer.org/v2/getJPXClosestToMidPoint/?';
        let req_url = '';

        base_url += 'startTimes=';
        for(let x in object.startTimes){
            base_url += object.startTimes[x] + ',';
        }
        base_url = base_url.slice(0, -1) + "&";

        base_url += 'endTimes=';
        for(let x in object.endTimes){
            base_url += object.endTimes[x] + ',';
        }
        base_url = base_url.slice(0, -1) + "&";

        base_url += "sourceId=" + object.sourceId + "&";

        if (object.linked) {
            base_url += "linked=" + object.linked + "&";
        }
        req_url += base_url + "verbose=true&jpip=true";
        return helpers.dispatch_http_get(req_url, function(data){
            return data;
        });
    },
    /*


    queueMovie(){
        //TODO
    },
    reQueueMovie(){
        //TODO
    },
    getMovieStatus(){
        //TODO
    },
    downloadMovie(){
        //TODO
    },
    playMovie(){
        //TODO
    },
    takeScreenshot(){
        //TODO
    },
    downloadScreenshot(){
        //TODO
    },
    checkYouTubeAuth(){
        //TODO
    },
    getYouTubeAuth(){
        //TODO
    },
    uploadMovieToYouTube(){
        //TODO
    },
    getUserVideos(){
        //TODO
    },
    getClosestImage(){
        //TODO
    },
    getDataSources(){
        //TODO
    },
    getTile(){
        //TODO
    },
    shortenURL(){
        //TODO
    },
    getNewsFeed(){
        //TODO
    }*/
};
module.exports = helioviewer;

//helioviewer.getjp2image({date:"2014-01-01T23:59:59", sourceId:14});
//helioviewer.getjp2header(17654321);
/*helioviewer.getJPX({
    startTime: "2014-01-01T00:00:00",
    endTime: "2014-01-01T00:45:00" ,
    sourceId: 14,
    cadence: 12
});
*/
/*helioviewer.getJPXClosestToMidPoint({
    startTimes: [1306886400,1306887000,1306887600],
    endTimes: [1306886700,1306887300,1306887900] ,
    sourceId: 14,
    linked: true
});
    */