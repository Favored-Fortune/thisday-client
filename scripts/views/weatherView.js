'use strict';

var app = app || {};

(module => {
  const weatherView = {}

  weatherView.renderWeather = () => {
    $('.results').hide();

    let obj = {};
    //temperature is dependent on weather.js
    obj.maxTemp = module.weather.data.TMAX;
    obj.minTemp = module.weather.data.TMIN;

    obj.weathering = (() => {
      let weathering = 'Sun/Overcast';

      if(module.weather.data.SNOW > 0){//SNOW
        weathering = 'Snowed';
      } else if(module.weather.data.PRCP > 1){//PRCP
        weathering = 'Poured';
      } else if(module.weather.data.PRCP > 0){
        weathering = 'Rained';
      }
      return weathering;
    })()

    obj.image = (() => {
      console.log(obj.weathering);
      let image = 'images/sun-cloud.png';
      if(obj.weathering === 'Snowed'){
        image = 'images/snow-cloud.png';
      } else if(obj.weathering === 'Poured'){
        image = 'images/rain-cloud.png';
      } else if(obj.weathering === 'Rained'){
        image = 'images/rain-cloud.png';
      }
      return image;
    })()

    let template = Handlebars.compile($('#weather-template').text());

    $('#weatherCard').empty().append(template(obj));
  }

  module.weatherView = weatherView;
})(app)
