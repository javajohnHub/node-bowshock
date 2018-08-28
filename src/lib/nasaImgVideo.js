"use strict";

const helpers = require("./helpers");
let nasaImgVideo = {
  search(object) {
    let base_url = `https://images-api.nasa.gov/search?`;

    if (object.q) {
      base_url += "q=" + object.q + "&";
    }
    if (object.center) {
      base_url += "center=" + object.center + "&";
    }
    if (object.description) {
      base_url += "description=" + object.description + "&";
    }
    if (object.description_508) {
      base_url += "description_508=" + object.description_508 + "&";
    }
    if (object.keywords) {
      base_url += "keywords=" + object.keywords + "&";
    }
    if (object.location) {
      base_url += "location=" + object.location + "&";
    }
    if (object.media_type) {
      base_url += "media_type=" + object.media_type + "&";
    }

    if (object.nasa_id) {
      base_url += "nasa_id=" + object.nasa_id + "&";
    }
    if (object.photographer) {
      base_url += "photographer=" + object.photographer + "&";
    }
    if (object.secondary_creator) {
      base_url += "secondary_creator=" + object.secondary_creator + "&";
    }
    if (object.title) {
      base_url += "title=" + object.title + "&";
    }
    if (object.year_start) {
      base_url += "year_start=" + object.year_start + "&";
    }
    if (object.year_end) {
      base_url += "year_end=" + object.year_end + "&";
    }
    return of(helpers.getJSON(`${base_url}?api_key=${helpers.nasa_api_key()}`, 'GET').then((data) => {
      return data;
  }))
  },

  getAsset(nasa_id) {
    let uri = `https://images-api.nasa.gov/asset/${nasa_id}`;
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  getMetadata(nasa_id) {
    let uri = `https://images-api.nasa.gov/metadata/${nasa_id}`;
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  },

  getCaptions(nasa_id) {
    let uri = `https://images-api.nasa.gov/captions/${nasa_id}`;
    return of(helpers.getJSON(uri, 'GET').then((data) => {
      return data;
  }))
  }
};

module.exports = nasaImgVideo;
// let obj = {
//   q: "space"
// };
//nasaImgVideo.search(obj);

//nasaImgVideo.getAsset('Space-to-Ground_171_170407');
//nasaImgVideo.getMetadata('Space-to-Ground_171_170407');
//nasaImgVideo.getCaptions('Space-to-Ground_171_170407');
