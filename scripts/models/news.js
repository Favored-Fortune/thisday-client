'use strict';

var app = app || {};
var API_URL = 'http://localhost:3000';

(module => {

  News.all = [];

  function News() {
    
  }

  $('#requestDate').on('submit', function(event) {
    event.preventDefault();
    let year = event.target[0].value;
    let month = event.target[1].value;
    let day = event.target[2].value;

    $.get(`${API_URL}/nyt/articles`)
      .then(results => console.log(results.text));
  })


  module.News = News;
})(app);