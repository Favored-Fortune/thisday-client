'use strict';

var app = app || {};
// var API_URL = 'http://localhost:3000';
var API_URL = 'https://this-day.herokuapp.com';
/*

We should create a file similar to this for each of our data sets (NYT, Weather, Famous People, etc) - a model that is a property of our app where ajax requests are made and data is received from the server and run through a constructor if necessary.
~models/
        news.js
        weather.js (I noticed this file is currently in the server repo?)
        people.js
        etc.
*/


// Model for news articles taken from the NYT API - all articles for the chosen date on page 1 of the NYT on that day are returned
(module => {

  Article.all = [];

  // constructor - data is taken from the data loaded in the loadAll function and stripped down to the properties we are interested in
  function Article(object) {
    if (object.lead_paragraph === null) {
      this.blurb = object.snippet;
    } else {
      this.blurb = object.lead_paragraph;
    }
    this.headline = object.headline.main;
    this.link = object.web_url;
  }

  Article.prototype.toHtml = function() {
    let template = Handlebars.compile($('#news-template').text());
    return template(this);
  }


  // loadAll is called after data is received from the server; this function parses the response data, and filters the articles for only the ones on the front page on the specific day. These are then run through the constructor and the objects we will use are then created.
  Article.loadAll = articles => {
    // $('#newsLoading').hide();
    let data = JSON.parse(articles.text);
    let day = localStorage.getItem('day');
    let month = localStorage.getItem('month');
    let year = localStorage.getItem('year');
    console.log(data.response.docs);
    Article.all = data.response.docs.filter(object => {
      let date = object.pub_date.split('T')[0];
      if (date === `${year}-${month}-${day}` && object.print_page === '1') {
        return object;
      }
    })
      .map(object => new Article(object))
  }

  // When form is submitted (date entered), the callback function stores the input data and makes a get request to the server for the monthly data from the API

  //TO-DO: do filtering logic on server to only send back daily articles from server

  $('#requestDate').on('submit', function(event) {
    event.preventDefault();
    $('#weatherLoading').show();
    $('#newsLoading').show();
    let year = event.target[0].value;
    let month = event.target[1].value;
    let day = event.target[2].value;
    let thisMonth = month;

    if (month.charAt(0) === '0' && month.length === 2) thisMonth = month.charAt(1);

    localStorage.setItem('day', day);
    localStorage.setItem('month', month);
    localStorage.setItem('year', year);

    if ($('#save-date')[0].checked) {
      console.log('checked');
      app.User.update()
    }

    module.weather.fetch();

    // $('#newsLoading').show();
    $.get(`${API_URL}/nyt/articles/${year}/${thisMonth}`)
      .then(Article.loadAll)
      .then(app.newsView.renderNews)
  })


  module.Article = Article;
})(app);

