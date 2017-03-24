![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock2.png)

An npm Package for Node.js based on https://github.com/emirozer/bowshock
<br/>
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
var apod = require('./src/lib/apod.js');

//with specific date and tags - For apod all args are optional
apod(date="2017-03-11");

```

-
#####Asterank
```javascript
var asterank = require('./src/lib/asterank.js');

//all args mandatory
asterank(
            	query={"e": {"$lt": 0.1},
               	       "i": {"$lt": 4},
                       "a": {"$lt": 1.5}},
                  limit=1)

```


-
#####Earth
```javascript
var earth = require('./src/lib/earth.js');

//imagery endpoint lon & lat mandatory, rest optional
earth.imagery((lon=100.75, lat=1.5, date="2014-02-04");

//assets endpoint lon & lat & begin mandatory, end optional
earth.assets(lon=100.75, lat=1.5, begin="2014-02-01");
```

-
#####HelioViewer
```javascript
var helioviewer = require('./src/lib/helioviewer.js');

//args are mandatory
helioviewer.getjp2image(date='2014-01-01T23:59:59', sourceId=14);

//args are mandatory
helioviewer.getjp2header(Id=7654321);

```


-
#####MAAS
```javascript
var maas = require('./src/lib/maas.js');

//mandatory date begin / end
maas.maas_archive(begin="2015-03-19", end="2017-03-19")

maas.maas_latest()

```

-
#####Patents
```javascript
var patents = require('./src/lib/patents.js');

//only query is mandatory, rest is optional
bs.patents.patents(query="temperature", concept_tags=True, limit=5);

```
-
##### Skymorph
```javascript
var skymorph = require('./src/lib/skymorph.js');

// mandatory obj id
skymorph.search_target_obj("J99TS7A")

#TODO : add search_position() , search_target_obj()

```
#####techport
```javascript
var htechport = require('./src/lib/helioviewertechport.js');
techport.techport(Id="4795");

```
##Contributors

* [John Edwards](https://github.com/javajohnhub)
<br>

##BTW What is "bowshock"?
![Screenshot](https://raw.githubusercontent.com/emirozer/bowshock/master/docs/bowshock.jpg)
