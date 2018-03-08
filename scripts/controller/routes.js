'use strict';


page('/', app.requestView.initLoginPage);
page('/about', app.requestView.initAboutPage);
// homepage/request page
// page('/results', ctx => console.log);
// app.Article.fetchAll(app.newsView.renderNews));
page('/*', app.errorView.initErrorPage);
page();
