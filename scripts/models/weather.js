'use strict'

// var API_URL = 'http://localhost:3000';
<<<<<<< HEAD
var API_URL = 'https://git.heroku.com/this-day';
=======

var API_URL = 'https://this-day.herokuapp.com';
>>>>>>> 87cde6c73fd066403bedc3d6069edfe53ad79786

(module => {
  let weather = {};
  weather.handle = data => {
    // $('#weatherLoading').hide();
    weather.data = {};
    let things = JSON.parse(data.text);
    things.results
      .map(x => weather.data[x.datatype] = x.value);
    app.weatherView.renderWeather()
  }

  // $('#weatherLoading').show();
  weather.fetch = () => {
    $.get(`${API_URL}/noaa/weather/${localStorage.year}/${localStorage.month}/${localStorage.day}`)
      .then(weather.handle)
  }

  module.weather = weather;
})(app);