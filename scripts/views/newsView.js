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
    $('.tab-content').hide();
    // jQuery stuff hide/show/etc.
    // call Article.toHtml to render template
    module.Article.all.map(article => $('.news').append(article.toHtml()))
    $('.news').fadeIn(750);
    $('.news-container:gt(2)').hide();
  }

  module.newsView = newsView;
})(app)

