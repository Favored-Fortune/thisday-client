'use strict';

var app = app || {};

(module => {
  const weatherView = {}

  weatherView.renderWeather = () => {
    //$('.tab-content').hide();
    $('.results').hide();
    // jQuery stuff hide/show/etc.
    // call Weather.toHtml to render template

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

    let template = Handlebars.compile($('#weather-template').text());
    console.log(obj);
    //return template(this);

    $('#weatherCard').empty().append(template(obj));
    // $('.results').fadeIn(750);

  }

  module.weatherView = weatherView;
})(app)
