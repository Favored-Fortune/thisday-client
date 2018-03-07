'use strict';

var app = app || {};

(module => {

  User.all = [];

  // 
  function User (user) {
    this.username = username,
    this.dateSearched = fav_date
  }

  User.checkUser = function(ctx) {
    console.log(ctx);
    User.getAll()
      .then(User.all.includes(ctx.username) ? resultsView.initKnownPage : resultsView.initViewPage)
      .catch(errorCallback);
    new User(ctx);
    User.all.push(this);
  };

  User.loadAll = rows => User.all = rows.map(user => new User(user));

  User.getAll = callback =>
    $.get(`${__API_URL__}/api/v1/users`)
      .then(User.loadAll)
      .catch(errorCallback);
  const resultView = {};
  
  // resultView.initViewPage(ctx) {
       
  // }


})(app)
