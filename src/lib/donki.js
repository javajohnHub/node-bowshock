"use strict";

const helpers = require("./helpers");
let donki = {
  CME(object) {
    let base_url = `https://api.nasa.gov/DONKI/CME?`;
      
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },
  CMEA(object) {
    let base_url = `https://api.nasa.gov/DONKI/CMEAnalysis?`;
    
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    if (object.mostAccurateOnly) {
      base_url += "mostAccurateOnly=" + object.mostAccurateOnly + "&";
    }
    if (object.speed) {
      base_url += "speed=" + object.speed + "&";
    }
    if (object.halfAngle) {
      base_url += "halfAngle=" + object.halfAngle + "&";
    }
    if (object.catalog) {
      base_url += "catalog=" + object.catalog + "&";
    }
    if (object.keyword) {
      base_url += "catalog=" + object.catalog + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },
  GST(object) {
    let base_url = `https://api.nasa.gov/DONKI/GST?`;
    
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },

  IPS(object) {
    let base_url = `https://api.nasa.gov/DONKI/IPS?`;
    
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    if (object.location) {
        base_url += "location=" + object.location + "&";
      }
      if (object.catalog) {
        base_url += "catalog=" + object.catalog + "&";
      }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },

  FLR(object) {
    let base_url = `https://api.nasa.gov/DONKI/FLR?`;
    
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },

  SEP(object) {
    let base_url = `https://api.nasa.gov/DONKI/SEP?`;
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },

  MPC(object) {
    let base_url = `https://api.nasa.gov/DONKI/MPC?`;
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },

  RBE(object) {
    let base_url = `https://api.nasa.gov/DONKI/RBE?`;
    
      base_url += "startDate=" + helpers.vali_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },
  HSS(object) {
    let base_url = `https://api.nasa.gov/DONKI/HSS?`;
   
      base_url += "startDate=" +  helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },

  WSASim(object) {
    let base_url = `https://api.nasa.gov/DONKI/WSAEnlilSimulations?`;
    
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  },

  notifications(object) {
    let base_url = `https://api.nasa.gov/DONKI/notifications?`;
    
      base_url += "startDate=" + helpers.valid_date(object.startDate) + "&";
    if (object.endDate) {
      
      base_url += "endDate=" + helpers.valid_date(object.endDate) + "&";
    }
    if (object.type) {
        base_url += "type=" + object.type + "&";
      }
    base_url += `api_key=${helpers.nasa_api_key()}`;
    return helpers.getJSON(base_url, 'GET')
  }
};

module.exports = donki;
// let object ={
//     startDate: '2017-09-10',
//     endDate: '2017-10-10'
// }
//donki.CME(object)
//donki.CMEA(object)
//donki.FLR(object)
//donki.GST(object)
//donki.HSS(object)
//donki.IPS(object)
//donki.MPC(object)
//donki.notifications(object)
//donki.RBE(object)
//donki.SEP(object)
//donki.WSASim(object)