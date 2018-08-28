"use strict";

const helpers = require('./helpers');
let exoPlanet = {
    allConfirmedPlanetsAndCols(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json`;
        return of(helpers.getJSON(encodeURI(uri), 'GET').then((data) => {
            return data;
        }))
    },

    confirmedPlanetsInKeplerField(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json&where=pl_kepflag=1`
        return of(helpers.getJSON(uri, 'GET').then((data) => {
            return data;
        }))
    },

    starsKnownToHostExoPlanets(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&select=distinct pl_hostname&order=pl_hostname&format=json`
        return of(helpers.getJSON(uri, 'GET').then((data) => {
            return data;
        }))
    },

    confirmedPlanetsThatTransitHostStars(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json&where=pl_tranflag=1`
        return of(helpers.getJSON(uri, 'GET').then((data) => {
            return data;
        }))
    },

    currentNonConfirmedPlanetCandidates(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=cumulative&format=json&where=koi_disposition like 'CANDIDATE'`
        return of(helpers.getJSON(uri, 'GET').then((data) => {
            return data;
        }))
    }, 
    k2TargetsFromCapaign9(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=k2targets&format=json&where=k2_campaign=9`
        return of(helpers.getJSON(uri, 'GET').then((data) => {
            return data;
        }))
    },

    confirmedPlanetsInMissionStarList(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=missionstars&format=json&where=st_ppnum>0`
        return of(helpers.getJSON(uri, 'GET').then((data) => {
            return data;
        }))
    }, 
    getSingleKOI(kepoi_name){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=koi&format=json&where=kepoi_name='${kepoi_name}'`
        return of(helpers.getJSON(encodeURI(uri), 'GET').then((data) => {
            return data;
        }))
    },

    allMicrolensingPlanetsWithTimeSeries(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json&where=pl_discmethod like 'Microlensing' and st_nts > 0`
        return of(helpers.getJSON(uri, 'GET').then((data) => {
            return data;
        }))
    },

    allPlanetaryCandidatesSmallerThan2ReWithEquilibriumTemperaturesBetween180and303K(){
        let uri = `https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=cumulative&format=json&where=koi_prad<2 and koi_teq>180 and koi_teq<303 and koi_disposition like 'CANDIDATE'`
        return of(helpers.getJSON(uri, 'GET').then((data) => {
        return data;
    }))
    }
}

module.exports = exoPlanet;

//exoPlanet.getSingleKOI('K00007.01')
//exoPlanet.allConfirmedPlanetsAndCols()
//exoPlanet.confirmedPlanetsInKeplerField()
//exoPlanet.starsKnownToHostExoPlanets()
//exoPlanet.confirmedPlanetsThatTransitHostStars()
//exoPlanet.currentNonConfirmedPlanetCandidates()
//exoPlanet.k2TargetsFromCapaign9()
//exoPlanet.confirmedPlanetsInMissionStarList()
//exoPlanet.allMicrolensingPlanetsWithTimeSeries()
//exoPlanet.allPlanetaryCandidatesSmallerThan2ReWithEquilibriumTemperaturesBetween180and303K()