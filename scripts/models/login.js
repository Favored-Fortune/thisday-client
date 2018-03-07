'use strict';

var app = app || {};
var API_URL = 'http://localhost:3000';

(module => {

  User.all = [];

  function User (user) {
    this.username = user.username,
    this.fav_date = user.fav_date
  }

  $('#user-form').on('submit', function(event){
    event.preventDefault();
    let username = event.target.username.value;
    User.getAll(User.checkUser, username);
  });

  User.checkUser = function(user) {
    console.log(User.all);
    console.log(user);
    const userCheck = User.all.filter(userObj => userObj.username === user)
    console.log(userCheck);
    if(userCheck.length === 1) {
      app.requestView.initKnownUser(userCheck);
    }else{
      app.requestView.initNewUser(user);
      $('#requestDate').on('submit', function(event, user){
        $.post(`${API_URL}/api/vi/newUser/`)
      })
    }
  };

  User.loadAll = rows => User.all = rows.map(user => new User(user));

  User.getAll = (callback, username) => {
    $.get(`${API_URL}/api/v1/users`)
      .then((results) => {
        User.loadAll(results)
        callback(username)
      })
      .catch(console.error);
  }
  module.User = User;

})(app)