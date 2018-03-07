'use strict'

var API_URL = 'http://localhost:3000';

(module => {
  let weather = {};
  weather.handle = data => {
    let arr = data.response.results
      .filter (x => x.station === data.results[0].station)
      .map(x => {
        let out = {};
        out[x.datatype] = x.value;
        return out;
      });
    console.log('Weather Data: ', arr)
  }
  weather.fetch = () => {
    $.get(`${API_URL}/noaa/weather/${localStorage.year}/${localStorage.month}/${localStorage.day}`)
      .then(weather.handle)
  }

  module.weather = weather;
})(app);

    // move to news.js
    // module.weather.fetch ();