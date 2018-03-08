'use strict';

var app = app || {};
var API_URL = 'http://localhost:3000';
//var API_URL = 'https://git.heroku.com/this-day';

(module => {

  User.all = [];

  function User (user) {
    this.username = user.username,
    this.fav_date = user.fav_date
  }

  $('#user-form').on('submit', function(event){
    event.preventDefault();
    localStorage.username = event.target.username.value;
    User.getAll(User.checkUser, localStorage.username);
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

  User.add = () => {
    $.ajax({
      method: 'PUT',
      url: `${API_URL}/api/v1/users/${localStorage.username}`,
    }).then ()
      .catch(console.error)
  }

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
    // TODO: check line 33 post request. vi or v1?
    // TODO: test to make sure that local build of Users.all is also being reloaded.
    // TODO: redirect back to home after route fires.
    $.ajax({
      url: `${API_URL}/api/v1/users/${localStorage.username}`,
      method: 'DELETE'
    }).then(()=> {
      localStorage.removeItem('username')
    })
      .then(module.requestView.initLoginPage())
      .catch(console.error);
  }

  module.User = User;

})(app)