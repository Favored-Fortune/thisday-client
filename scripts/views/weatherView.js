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
      $('.hidden').hide();
      if(obj.weathering === 'Snowed'){
        $('#snow').fadeIn(500);
      } else if(obj.weathering === 'Poured'){
        $('#rain').fadeIn(500);
      } else if(obj.weathering === 'Rained'){
        $('#rain').fadeIn(500);
      } else {
        $('#sun').fadeIn(500);
      }
    })

    let template = Handlebars.compile($('#weather-template').text());

    $('#weatherCard').empty().append(template(obj));
    obj.image();
  }

  module.weatherView = weatherView;
})(app)
