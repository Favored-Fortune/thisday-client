'use strict';

var app = app || {};
var API_URL = 'http://localhost:3000';

(module => {

  User.all = [];

  function User (user) {
    this.username = user.username,
    this.datesearched = user.date_searched
  }

  $('#user-form').on('submit', function(event){
    event.preventDefault();
    let username = event.target.username.value;
    User.getAll(User.checkUser(username));
  });

  User.checkUser = function(user) {
    const userCheck = User.all.filter(userObj => userObj.username === user)
    if(userCheck.length === 1) {
      app.requestView.initKnownUser(userCheck);
    }else{
      app.initRequestView;
    }
  };

  User.loadAll = rows => User.all = rows.map(user => new User(user));

  User.getAll = callback =>
    $.get(`${API_URL}/api/v1/users`)
      .then(User.loadAll)
      .then(callback)
      .catch(console.error);
  module.User = User;

})(app)