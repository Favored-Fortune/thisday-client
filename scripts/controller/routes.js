'use strict';


page('/', app.requestView.initLoginPage);
// homepage/request page
page('/results', ctx => console.log);
// app.Article.fetchAll(app.newsView.renderNews));
page('*', ctx => app.errorView.initErrorPage);
page();
