'use strict';

var app = app || {};
// var API_URL = 'http://localhost:3000';
var API_URL = 'https://this-day.herokuapp.com';

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
      $('#requestDate').on('submit', function(event) {
        event.preventDefault();
        let user = {
          username: loginName,
          pin: '0000',
          fav_date: `${event.target.year.value}-${event.target.month.value}-${event.target.day.value}`
        };
        let newUser = new User(user);
        User.create(newUser);
        User.all.push(newUser);
      })
    }
    $('#forget button').on('click', module.User.forget)
  }

  User.create = (newUser) =>
    $.post(`${API_URL}/api/v1/newUser`, newUser)
      .then(console.log('post'))
      .catch(console.error);

  User.loadAll = rows => User.all = rows.map(user => new User(user));

  User.getAll = (callback, username) => {
    $.get(`${API_URL}/api/v1/users`)
      .then((results) => {
        User.loadAll(results);
        callback(username);
      })
      .catch(console.error);
  }

  User.forget = () =>{
    // TODO: test to make sure that local build of Users.all is also being reloaded.
    $.ajax({
      url: `${API_URL}/api/v1/users/${localStorage.username}`,
      method: 'DELETE'
    }).then(()=> {
      localStorage.clear()
    })
      .then(module.requestView.initLoginPage())
      .catch(console.error);
  }

  User.update = () => {
    $.ajax({
      url: `${API_URL}/api/v1/users`,
      method: 'PUT',
      data: {
        username: localStorage.username,
        date: `${localStorage.year}-${localStorage.month}-${localStorage.day}`,
      }
    })
  }

  module.User = User;

})(app)