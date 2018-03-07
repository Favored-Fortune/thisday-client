'use strict'

var API_URL = 'http://localhost:3000';

(module => {
  let weather = {};
  weather.handle = data => {
    weather.data = {};
    let things = JSON.parse(data.text);
    things.results
      .filter (x => x.station === things.results[0].station)
      .map(x => {
        weather.data[x.datatype] = x.value;
      });
  }

  weather.fetch = () => {
    $.get(`${API_URL}/noaa/weather/${localStorage.year}/${localStorage.month}/${localStorage.day}`)
      .then(weather.handle)
  }

  module.weather = weather;
})(app);