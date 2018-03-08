'use strict';

var app = app || {};
var API_URL = 'http://localhost:3000';

(module => {

  User.all = [];

  function User (user) {
    this.username = user.username,
    this.pin = user.pin,
    this.fav_date = user.fav_date
  }

  $('#user-form').on('submit', function(event){
    event.preventDefault();
    localStorage.username = event.target.username.value;
    User.getAll(User.checkUser, localStorage.username);
  });

  User.checkUser = function(loginName) {
    const userCheck = User.all.filter(userObj => userObj.username === loginName)
    if(userCheck.length === 1) {
      app.requestView.initKnownUser(userCheck);
    }else{
      app.requestView.initNewUser(loginName);
      console.log(user);
      
      $('#requestDate').on('submit', function(event) {
        event.preventDefault();
        let user = {
          username: loginName,
          pin: '0000',
          fav_date: `${event.target.year.value}-${event.target.month.value}-${event.target.day.value}`
        };
        let newUser = new User(user);
        console.log(newUser);
        User.create(newUser);
      })
    }
  }

  User.create = (newUser) =>
    $.post(`${API_URL}/api/v1/newUser`, newUser)
      .then(console.log('post'))
      .catch(console.error);

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