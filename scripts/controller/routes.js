'use strict';

page('/', app.requestView.initLoginPage);
page('/thisday-client', app.requestView.initLoginPage);
page('/about', app.requestView.initAboutPage);
page('*', ctx => app.errorView.initErrorPage);
page();


