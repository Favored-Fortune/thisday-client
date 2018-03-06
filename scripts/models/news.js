'use strict';

var app = app || {};
var API_URL = 'http://localhost:3000';

(module => {

  News.all = [];

  function News(articleObj) {
    Object.keys(articleObj).forEach(key => this[key] = articleObj[key]);
  }

  News.loadAll = articles => {
    let data = JSON.parse(articles.text);
    console.log(data.response.docs)
    News.all = data.response.docs.filter(object => object.pub_date === '1960-01-01T00:00:00Z' && object.print_page === '1')
    // News.all = test => new News(test);
  }

  $('#requestDate').on('submit', function(event) {
    event.preventDefault();
    module.d= {};
    module.d.year = event.target[0].value;
    module.d.month = event.target[1].value;
    module.d.day = event.target[2].value;

    $.get(`${API_URL}/nyt/articles/${module.d.year}/${module.d.month}`)
      .then(News.loadAll)
      // .then(results => console.log(JSON.parse(results.text)));
  })


  module.News = News;
})(app);