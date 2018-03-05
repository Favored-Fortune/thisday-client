'use strict';

var app = app || {};
var API_URL = 'http://localhost:3000';

(module => {

  News.all = [];

  function News() {
    
  }

  News.fetchDay = () => {
    $.get(`${API_URL}/nyt/articles`)
      .then(console.log());

  }

  module.News = News;
})(app);