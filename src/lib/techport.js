"use strict";
let helpers = require('./helpers');

function techport(id){
    let base_url = "https://techport.nasa.gov/api/items";

    if(id){
      base_url = `https://techport.nasa.gov/api/items/${id}?objectId=${id}`;
    }
    return of(helpers.getXML(base_url).then((data) => {
      return data;
  }))

}
module.exports = techport;

//techport();