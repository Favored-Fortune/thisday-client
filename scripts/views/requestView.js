'use strict';

var app = app || {};

(module => {

  User.all = [];

  function User (user) {
    this.username = username,
    this.dateSearched = fav_date
  }

  User.checkUser = function(ctx, callback) {
    User.all.includes(username) ? resultsView.initKnownPage: resultsView.initViewPage;
    new User(ctx);
    User.getAll();
  };

  User.loadAll = rows => User.all = rows.map(user => new User(user));

  User.getAll = callback =>
    $.get(`${__API_URL__}/api/v1/users`)
      .then(User.loadAll)
      .catch(errorCallback);
  const resultView = {};
  
  resultView.initViewPage(ctx) {
       
  }


})(app)
