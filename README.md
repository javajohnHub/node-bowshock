![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock2.png)

##About

bowshock is an all-in-one wrapper for NASA API's.
Here is a list of currently supported API's :

* NASA [Earth API](https://api.nasa.gov/api.html#earth)
* NASA [APOD (Astronomy Picture of the Day) API](https://api.nasa.gov/api.html#apod)
* NASA [Patents API](https://api.nasa.gov/api.html#patents)
* NASA [Earth Temperature Anomalies API](https://api.nasa.gov/api.html#earth-temperature-anomalies)
* [Asterank API](http://www.asterank.com/api)
* [HelioViewer API](http://helioviewer.org/api/docs/v1/)
* [MAAS (Mars Weather) API](http://marsweather.ingenology.com/#get_started)
* [MODIS (Land, Atmosphere and Ocean Data) API](http://daac.ornl.gov/MODIS/MODIS-menu/modis_webservice.html)
* [Skymorph API](http://www.asterank.com/skymorph)
* [Star API](http://hacktheuniverse.github.io/star-api/)
* [Techport API](https://data.nasa.gov/developer/external/techport/techport-api.pdf)
* [PredictTheSky API](http://predictthesky.org/developers.html)

##Install

Standart Procedure

	npm install

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
set an environment varible NASA_API_KEY which is equal to your key string


##Usage

-
#####Apod
```javascript
var apod = require('./src/lib/apod');

//with specific date and tags - For apod all args are optional
apod(date="2017-03-11");

```

-
#####Asterank
```javascript
var bs = require('node-bowshock');

//all args mandatory
bs.asterank(
            	query={"e": {"$lt": 0.1},
               	       "i": {"$lt": 4},
                       "a": {"$lt": 1.5}},
                  limit=1)

```


-
#####Earth
```javascript
var bs = require('node-bowshock');

//imagery endpoint lon & lat mandatory, rest optional
bs.earth.imagery((lon=100.75, lat=1.5, date="2014-02-04");

//assets endpoint lon & lat & begin mandatory, end optional
bs.earth.assets(lon=100.75, lat=1.5, begin="2014-02-01");
```

-
#####HelioViewer
```javascript
var bs = require('node-bowshock');

//args are mandatory
bs.helioviewer.getjp2image(date='2014-01-01T23:59:59', sourceId=14);

//args are mandatory
bs.helioviewer.getjp2header(Id=7654321);

```


-
#####MAAS
```javascript
var bs = require('node-bowshock');

//mandatory date begin / end
bs.maas.maas_archive(begin="2015-03-19", end="2017-03-19")

bs.maas.maas_latest()

```

-
#####Patents
```javascript
var bs = require('node-bowshock');

//only query is mandatory, rest is optional
bs.patents.patents(query="temperature", concept_tags=True, limit=5);

```


-
#####PredictTheSky - Not Working
```javascript
var bs = require('node-bowshock');

//args are mandatory
bs.predictthesky.space_events(lon=100.75, lat=1.5);

```


-
##### Skymorph
```javascript
var bs = require('node-bowshock');

// mandatory obj id
bs.skymorph.search_target_obj("J99TS7A")

#TODO : add search_position() , search_target_obj()

```


-
#####temperature anomalies - Not Working
```javascript
var bs = require('node-bowshock');

//end arg is optional, rest is mandatory
bs.temperature_anomalies.coordinate(lon=100.3, lat=1.6, begin="1990", end="2005")


```


-
#####techport
```javascript
var bs = require('node-bowshock');

bs.techport.techport(Id="4795")

```
##Contributors

* [John Edwards](https://github.com/javajohnhub)
<br>

##BTW What is "bowshock"?
![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock.jpg)
