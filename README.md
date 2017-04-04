![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock2.png)
===========
<a href="https://www.npmjs.com/package/node-bowshock/"><img src="https://nodei.co/npm/node-bowshock.png?downloads=true&downloadRank=true&stars=true"></a>
<br/>
[![GitHub issues](https://img.shields.io/github/issues/javajohnhub/node-bowshock.svg)](https://github.com/javajohnhub/node-bowshock/issues)
[![Build Status](https://travis-ci.org/javajohnHub/node-bowshock.svg?branch=master)](https://travis-ci.org/javajohnHub/node-bowshock)
[![Coverage Status](https://coveralls.io/repos/github/javajohnHub/node-bowshock/badge.svg?branch=master)](https://coveralls.io/github/javajohnHub/node-bowshock?branch=master)
<br/>
An npm Package for Node.js based on https://github.com/emirozer/bowshock
<br/>
bowshock is an all-in-one wrapper for NASA API's.
Here is a list of currently supported API's :

* [Earth API](https://api.nasa.gov/api.html#earth)
* [APOD (Astronomy Picture of the Day) API](https://api.nasa.gov/api.html#apod)
* [Mars Rover Photos API](https://api.nasa.gov/api.html#MarsPhotos)
* [Asteroids - NeoWs API](https://api.nasa.gov/api.html#NeoWS)
* [Extra Vehicular Activity - US and Russia](https://dev.socrata.com/foundry/data.nasa.gov/q8u9-7uq7)
* [EPIC API](https://api.nasa.gov/api.html#EPIC)
* [EONET API](https://eonet.sci.gsfc.nasa.gov/docs/v2.1)
* [Patents API](https://api.nasa.gov/api.html#patents)
* [Sounds API](https://api.nasa.gov/api.html#sounds)
* [Asterank API](http://www.asterank.com/api)
* [HelioViewer API](http://helioviewer.org/api/docs/v1/)
* [MAAS (Mars Weather) API](http://marsweather.ingenology.com/#get_started)
* [Skymorph API](http://www.asterank.com/skymorph)
* [Techport API](https://data.nasa.gov/developer/external/techport/techport-api.pdf)
* [SSD/CNEOS API](https://api.nasa.gov/api.html#ssd_CNEOS)
* [Trek WMTS API](https://api.nasa.gov/api.html#trek)

## Install

	npm install node-bowshock

## Do I need an API Key ?
|          | Yes    | No     |
|----------|--------|--------|
| Earth    |&#10004;|        |
| Apod     |&#10004;|        |
| Rover    |&#10004;|        |
| NeoWs    |&#10004;|        |
| EVA      |        |&#10004;|
| EPIC     |&#10004;|        |
| EONET    |        |&#10004;|
| Helio    |        |&#10004;|
| Maas     |        |&#10004;|
| Patents  |&#10004;|        |
| Skymorph |        |&#10004;|
| Techport |&#10004;|        |
| Sounds   |&#10004;|        |
| SSD/CNEOS|&#10004;|        |
| Trek WMTS|        |&#10004;|

Get your NASA API KEY from : https://data.nasa.gov/developer/external/planetary/#apply-for-an-api-key

#### Setting up the API Key
<br/>
Set an environment varible NASA_API_KEY which is equal to your key string.<br/>
Create a .env file in the root of the project.
Logging to console can be enabled or disabled.<br/>

--------
.env<br/>

```bash
NASA_API_KEY=########################
LOGGER=true

```
---------

##### Apod
```javascript
let bowshock = require('node-bowshock');

//with specific date and tags - For apod all args are optional
bowshock.apod("2017-03-11");

```

##### Mars Rovers
```javascript
let bowshock = require('node-bowshock');

bowshock.mars.curiosity("2015-06-03");
bowshock.mars.opportunity("2015-06-03");
bowshock.mars.spirit("2015-06-03");

```

##### NeoWs
```javascript
let bowshock = require('node-bowshock');

bowshock.neows.today(true);

bowshock.neows.stats();

bowshock.neows.feed("2015-06-03");

//Lookup a specific Asteroid based on its NASA JPL small body (SPK-ID) ID
bowshock.neows.lookup(3542519);

bowshock.neows.browse();

```

##### EVA
```javascript
let bowshock = require('node-bowshock');

bowshock.eva();

```

##### EPIC
```javascript
let bowshock = require('node-bowshock');

bowshock.epic.natural();

bowshock.epic.natural("2017-02-11");

bowshock.epic.enhanced();

bowshock.epic.enhanced("2017-02-11");

```

##### Sounds
```javascript
let bowshock = require('node-bowshock');
//query , limit
bowshock.sounds("apollo", 10);

```

##### EONET
```javascript
let bowshock = require('node-bowshock');

bowshock.eonet.events({source:"InciWeb, EO", status:"open", limit:5, days:20});

bowshock.eonet.categories({id:8, source:"InciWeb, EO", status:"open", limit:5, days:20});

bowshock.eonet.layers(8);
```

##### Asterank
```javascript
let bowshock = require('node-bowshock');

//all args mandatory
bowshock.asterank({query: {"e":{"$lt":0.1},"i":{"$lt":4},"a":{"$lt":1.5}}, limit: 10});

```

##### Earth
```javascript
let bowshock = require('node-bowshock');

//imagery endpoint lon & lat mandatory, rest optional
bowshock.earth.imagery({lon: 100.75, lat: 1.5, date: "2014-02-04"});

//assets endpoint lon & lat & begin mandatory, end optional
bowshock.earth.assets({lon: 100.75, lat: 1.5, begin: "2014-02-01"});
```

##### HelioViewer
```javascript
let bowshock = require('node-bowshock');

//args are mandatory
bowshock.helioviewer.getjp2image({date:"2014-01-01T23:59:59", sourceId:14});

//args are mandatory
bowshock.helioviewer.getjp2header(7654321);

//startTime, endTime and sourceId are required
bowshock.helioviewer.getJPX({
    startTime: "2014-01-01T00:00:00",
    endTime: "2014-01-01T00:45:00" ,
    sourceId: 14,
    //linked: true,
    //cadence: 12
});

//startTime, endTime and sourceId are required
bowshock.helioviewer.getJPXClosestToMidPoint({
             startTimes: [1306886400,1306887000,1306887600],
             endTimes: [1306886700,1306887300,1306887900] ,
             sourceId: 14,
             //linked: true
         });

//startTime, endTime, layers, events, eventsLabels, and imageScale are required
bowshock.helioviewer.queueMovie({
             startTime: "2010-03-01T12:12:12",
             endTime: "2010-03-04T12:12:12",
             layers: "[3,1,100],[4,1,100]",
             events: "[AR,HMI_HARP;,SPoCA,1],[CH,all,1]",
             eventsLabels: false,
             imageScale: 21.04,
             format: "mp4",
             frameRate: 15,
             maxFrames: 300,
             scale: true,
             scaleType: "earth",
             scaleX: -1000,
             scaleY: -500,
             movieLength: 4.3333,
             watermark: true,
             width: 1920,
             height: 1200,
             x0: 0,
             y0: 0,
             x1: -5000,
             y1: -5000,
             x2: 5000,
             y2: 5000,
             //callback: "Wrap the response object in a function call of your choosing."
         });
         
// id and format required         
bowshock.helioviewer.getMovieStatus({
             id: "VXvX5",
             format: "mp4",
             verbose: true,
             //callback: "callback",
             //token: "4673d6db4e2a3365ab361267f2a9a112"
         });
         
// id and format are required - saves movie to root directory      
bowshock.helioviewer.downloadMovie({
             id: "VXvX5",
             format: "mp4",
             hq: true
         });
         
//id, format, and height are required --opens movie in default web browser
bowshock.helioviewer.playMovie({
          id: "VXvX5",
          format: "mp4",
          height: 820,
          //hq: true,
          //width: 846
          });


//date, imageScale, layers, eventLabels, and height are required
bowshock.helioviewer.takeScreenshot({
             date: "2014-01-01T23:59:59",
             imageScale: 2.4204409,
             layers: "[SDO,AIA,AIA,335,1,100]",
             eventLabels: false,
             height: 1200,
             //events: "[AR,HMI_HARP;SPoCA,1],[CH,all,1]"
             //scale: false,
             //scaleType: "earth",
             //scaleX: -1000,
             //scaleY: -500,
             //width: 1920,
             //x0: 1,
             //y0: 1,
             x1: -5000,
             y1: -5000,
             x2: 5000,
             y2: 5000,
             display: true,
             watermark: false
         });

      
bowshock.helioviewer.downloadScreenshot(3240748);
```

##### MAAS
```javascript
let bowshock = require('node-bowshock');

//mandatory date begin / end
bowshock.maas.maas_archive("2015-03-19", "2017-03-19")

bowshock.maas.maas_latest()

```

##### Patents
```javascript
let bowshock = require('node-bowshock');

//only query is mandatory, rest is optional
bowshock.patents({query: "temperature", concept_tags: true, limit: 5});

```

##### Skymorph
```javascript
let bowshock = require('node-bowshock');

// mandatory obj id
bowshock.skymorph.search_target_obj("J99TS7A")

```

##### Techport
```javascript
let bowshock = require('node-bowshock');

bowshock.techport(4795);

```

##### SSD/CNEOS
```javascript
let bowshock = require('node-bowshock');

//all args are optional
bowshock.ssd.cad({
            date_min: "2014-03-11",
            date_max: "2016-03-11",
            //dist_min: 0.05,
            //dist_max: 0.1,
            //h_min: 22,
            //h_max: 17.75,
            //v_inf_min: 5,
            //v_inf_max: 20,
            //v_rel_min: 11.2,
            //v_rel_max: 19,
            //class: "ATE",
            //pha: false,
            //nea: false,
            //comet: false,
            //neo: true,
            //kind: "a",
            //spk: 2000433,
            //des: 433,
            //body: "Earth",
            //sort: "date",
            //limit: 5,
            //fullname: true
        
        });
//all args are optional
bowshock.ssd.fireballs({
            date_min: "2016-12-01",
            date_max: "2017-01-01",
            //energy_min: .3,
            //energy_max: 10,
            //impact_e_min: .08,
            //impact_e_max: 10,
            //vel_min: 18.5,
            //vel_max: 20,
            //alt_min: 1,
            //alt_max: 22,
            //req_loc: false,
            req_alt: false,
            req_vel: false,
            req_vel_comp: false,
            vel_comp: false,
            sort: "date",
            limit: 5
        });

bowshock.ssd.nhats({
            dv: 12,
            dur: 450,
            stay: 8,
            launch: "2015-2020",
            //h: 16,
            //occ: 3,
            //spk:2000433,
            //des: "141P",
            plot: true
        
        });

bowshock.ssd.sentry({
             spk: 2029075,
             //des: 29075,
             //h_max: 50,
             //ps_min: 10,
             //ip_min: 1e-3,
             //days: 6,
             //all: false,
             //removed: false
         });

```

##### Trek WMTS
```javascript
let bowshock = require('node-bowshock');

bowshock.trek.mars("curiosity_ctx_mosaic");

bowshock.trek.vesta("global_LAMO");

```
## Contributors

* [John Edwards](https://github.com/javajohnhub)
<br>

## BTW What is "bowshock"?
![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock.jpg)
