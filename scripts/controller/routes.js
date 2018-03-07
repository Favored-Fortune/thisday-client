'use strict';


page('/', ctx => app. newsView.renderNews(ctx);
// homepage/request page
page('/results', ctx => app.User.checkUser); 
page('*', app.errorView.initErrorPage(errorCallback));
page();
