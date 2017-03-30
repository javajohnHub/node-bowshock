![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock2.png)
===========
<a href="https://www.npmjs.com/package/node-bowshock/"><img src="https://nodei.co/npm/node-bowshock.png?downloads=true&downloadRank=true&stars=true"></a>
<br/>
[![GitHub issues](https://img.shields.io/github/issues/javajohnhub/node-bowshock.svg)](https://github.com/javajohnhub/node-bowshock/issues)
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

## Install

	npm install node-bowshock

## Do I need an API Key ?
|         | Yes    | No     |
|---------|--------|--------|
| Earth   |&#10004;|        |
| Apod    |&#10004;|        |
| Rover   |&#10004;|        |
| NeoWs   |&#10004;|        |
| EVA     |        |&#10004;|
| EPIC    |&#10004;|        |
| EONET   |        |&#10004;|
| Helio   |        |&#10004;|
| Maas    |        |&#10004;|
| Patents |&#10004;|        |
| Skymorph|        |&#10004;|
| Techport|&#10004;|        |
| Sounds  |&#10004;|        |

Get your NASA API KEY from : https://data.nasa.gov/developer/external/planetary/#apply-for-an-api-key

#### Setting up the API Key
<br/>
Set an environment varible NASA_API_KEY which is equal to your key string.<br/>
Rename env.example to .env

##### Apod
```javascript
var bowshock = require('node-bowshock');

//with specific date and tags - For apod all args are optional
bowshock.apod(date="2017-03-11");

```

##### Mars Rovers
```javascript
var bowshock = require('node-bowshock');

bowshock.mars.curiosity("2015-06-03");
bowshock.mars.opportunity("2015-06-03");
bowshock.mars.spirit("2015-06-03");

```

##### NeoWs
```javascript
var bowshock = require('node-bowshock');

bowshock.neows.today(detailed=true);

bowshock.neows.stats();

bowshock.neows.feed(start_date="2015-06-03");

//Lookup a specific Asteroid based on its NASA JPL small body (SPK-ID) ID
bowshock.neows.lookup(3542519);

bowshock.neows.browse();

```

##### EVA
```javascript
var bowshock = require('node-bowshock');

bowshock.eva();

```

##### EPIC
```javascript
var bowshock = require('node-bowshock');

bowshock.epic.natural();

bowshock.epic.natural("2017-02-11");

bowshock.epic.enhanced();

bowshock.epic.enhanced("2017-02-11");

```

##### Sounds
```javascript
var bowshock = require('node-bowshock');

bowshock.sounds("apollo", limit=10);

```

##### EONET
```javascript
var bowshock = require('node-bowshock');

bowshock.eonet.events({source:"InciWeb, EO", status:"open", limit:5, days:20});

bowshock.eonet.categories({id:8, source:"InciWeb, EO", status:"open", limit:5, days:20});

bowshock.eonet.layers(8);
```

##### Asterank
```javascript
var bowshock = require('node-bowshock');

//all args mandatory
bowshock.asterank(
            	query={"e": {"$lt": 0.1},
               	       "i": {"$lt": 4},
                       "a": {"$lt": 1.5}},
                  limit=1)

```

##### Earth
```javascript
var bowshock = require('node-bowshock');

//imagery endpoint lon & lat mandatory, rest optional
bowshock.earth.imagery(lon=100.75, lat=1.5, date="2014-02-04");

//assets endpoint lon & lat & begin mandatory, end optional
bowshock.earth.assets(lon=100.75, lat=1.5, begin="2014-02-01");
```

##### HelioViewer
```javascript
var bowshock = require('node-bowshock');

//args are mandatory
bowshock.helioviewer.getjp2image(date='2014-01-01T23:59:59', sourceId=14);

//args are mandatory
bowshock.helioviewer.getjp2header(Id=7654321);

```

##### MAAS
```javascript
var bowshock = require('node-bowshock');

//mandatory date begin / end
bowshock.maas.maas_archive(begin="2015-03-19", end="2017-03-19")

bowshock.maas.maas_latest()

```

##### Patents
```javascript
var bowshock = require('node-bowshock');

//only query is mandatory, rest is optional
bowshock.patents(query="temperature", concept_tags=True, limit=5);

```

##### Skymorph
```javascript
var bowshock = require('node-bowshock');

// mandatory obj id
bowshock.skymorph.search_target_obj("J99TS7A")

#TODO : add search_position() , search_target_obj()

```

##### Techport
```javascript
var bowshock = require('node-bowshock');
bowshock.techport(Id="4795");

```

##### SSD/CNEOS
```javascript
var bowshock = require('node-bowshock');

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

bowshock.ssd.fireball(); -- coming soon.

bowshock.ssd.nhats(); -- coming soon.

bowshock.ssd.sentry(); -- coming soon.

```

## Contributors

* [John Edwards](https://github.com/javajohnhub)
<br>

## BTW What is "bowshock"?
![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock.jpg)
