'use strict';

var app = app || {};

(module => {
  const newsView = {}

  newsView.renderNews = () => {
    app.weatherView.renderWeather();
    $('.tab-content').hide();
    $('.news').hide();
    $('#info').hide();

    module.Article.all.map(article => $('.news').append(article.toHtml()))
    $('#chosenDate').text(`Your chosen date was ${localStorage.month}/${localStorage.day}/${localStorage.year}`);
    $('#chosenDate').fadeIn(750)
    $('.news').fadeIn(750);
    $('.results').fadeIn(750);
    $('.news-container:gt(2)').hide();
    
    $('#more-news').on('click', function() {
      $('.tab-content').hide();
      $('#info').hide();
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

