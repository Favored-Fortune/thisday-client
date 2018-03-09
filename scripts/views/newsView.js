'use strict';

var app = app || {};

/* 

This view file works with our news.js data to do all the jQuery magic that displays our data as desired on the page.
~views/
      newsView.js
      peopleView.js
      weatherView.js
*/


(module => {
  const newsView = {}

  newsView.renderNews = () => {
    app.weatherView.renderWeather();
    $('.tab-content').hide();
    $('.news').hide();

    module.Article.all.map(article => $('.news').append(article.toHtml()))
    $('#chosenDate').text(`Your chosen date was ${localStorage.month}/${localStorage.day}/${localStorage.year}`);
    $('#chosenDate').fadeIn(750)
    $('.news').fadeIn(750);
    $('.results').fadeIn(750);
    $('.news-container:gt(2)').hide();
    
    $('#more-news').on('click', function() {
      $('.tab-content').hide();
      $('.news').hide();
      $('.news').empty();
      module.Article.all.map(article => $('.news').append(article.toHtml()))
      $('.weatherCard').hide();
      $('.news').fadeIn(750);
      $('.results').fadeIn(750);
    })
  }

  module.newsView = newsView;
})(app)

