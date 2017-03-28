![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock2.png)
===========
[![npm version](https://badge.fury.io/js/node-bowshock.svg)](https://badge.fury.io/js/node-bowshock)
[![GitHub issues](https://img.shields.io/github/issues/javajohnhub/node-bowshock.svg)](https://github.com/javajohnhub/node-bowshock/issues)
[![Downloads](https://img.shields.io/npm/dm/node-bowshock.svg)](https://img.shields.io/npm/dm/node-bowshock.svg)

===========
<br/>
An npm Package for Node.js based on https://github.com/emirozer/bowshock
<br/>
bowshock is an all-in-one wrapper for NASA API's.
Here is a list of currently supported API's :

* [Earth API](https://api.nasa.gov/api.html#earth)
* [APOD (Astronomy Picture of the Day) API](https://api.nasa.gov/api.html#apod)
* [Mars Rover Photos API](https://api.nasa.gov/api.html#MarsPhotos)
* [Extra Vehicular Activity - US and Russia](https://dev.socrata.com/foundry/data.nasa.gov/q8u9-7uq7)
* [Patents API](https://api.nasa.gov/api.html#patents)
* [Asterank API](http://www.asterank.com/api)
* [HelioViewer API](http://helioviewer.org/api/docs/v1/)
* [MAAS (Mars Weather) API](http://marsweather.ingenology.com/#get_started)
* [MODIS (Land, Atmosphere and Ocean Data) API](http://daac.ornl.gov/MODIS/MODIS-menu/modis_webservice.html)- NOT WORKING
* [Skymorph API](http://www.asterank.com/skymorph)
* [Techport API](https://data.nasa.gov/developer/external/techport/techport-api.pdf)

##Install

	npm install node-bowshock

## Do i need an API Key ?

YES    | NO
------   |----
Earth  |The rest
APOD |
Patents |
Earth Temperature Anomalies|

**The rest does not require an API key for usage.**
Get your NASA API KEY from : https://data.nasa.gov/developer/external/planetary/#apply-for-an-api-key

####Setting up the API Key
===================
set an environment varible NASA_API_KEY which is equal to your key string.<br/>
rename env.example to .env

#####Apod
```javascript
var bowshock = require('node-bowshock');

//with specific date and tags - For apod all args are optional
bowshock.apod(date="2017-03-11");

```

-
#####Curiosity
```javascript
var bowshock = require('node-bowshock');

bowshock.curiosity("2015-06-03");

```

-

#####EVA
```javascript
var bowshock = require('node-bowshock');

bowshock.eva();

```

-

#####Asterank
```javascript
var bowshock = require('node-bowshock');

//all args mandatory
bowshock.asterank(
            	query={"e": {"$lt": 0.1},
               	       "i": {"$lt": 4},
                       "a": {"$lt": 1.5}},
                  limit=1)

```


-
#####Earth
```javascript
var bowshock = require('node-bowshock');

//imagery endpoint lon & lat mandatory, rest optional
bowshock.earth.imagery((lon=100.75, lat=1.5, date="2014-02-04");

//assets endpoint lon & lat & begin mandatory, end optional
bowshock.earth.assets(lon=100.75, lat=1.5, begin="2014-02-01");
```

-
#####HelioViewer
```javascript
var bowshock = require('node-bowshock');

//args are mandatory
bowshock.helioviewer.getjp2image(date='2014-01-01T23:59:59', sourceId=14);

//args are mandatory
bowshock.helioviewer.getjp2header(Id=7654321);

```


-
#####MAAS
```javascript
var bowshock = require('node-bowshock');

//mandatory date begin / end
bowshock.maas.maas_archive(begin="2015-03-19", end="2017-03-19")

bowshock.maas.maas_latest()

```

-
#####Patents
```javascript
var bowshock = require('node-bowshock');

//only query is mandatory, rest is optional
bowshock.patents(query="temperature", concept_tags=True, limit=5);

```
-
##### Skymorph
```javascript
var bowshock = require('node-bowshock');

// mandatory obj id
bowshock.skymorph.search_target_obj("J99TS7A")

#TODO : add search_position() , search_target_obj()

```
#####techport
```javascript
var bowshock = require('node-bowshock');
bowshock.techport(Id="4795");

```
##Contributors

* [John Edwards](https://github.com/javajohnhub)
<br>

##BTW What is "bowshock"?
![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock.jpg)
