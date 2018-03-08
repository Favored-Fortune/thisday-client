'use strict';

var app = app || {};

(module => {
  const requestView = {}

  requestView.initLoginPage = () => {
    $('.tab-content').hide();
    $('.login').fadeIn(750);
    $('#username').val('');
    $('#aboutUs').on('click', app.requestView.initAboutPage);
  }

  requestView.initKnownUser = (user) => {
    console.log(user);
    $('.tab-content').hide();
    $('.request').fadeIn(750);
    let date = user[0].fav_date.split('T')[0].split('-');
    $('#year').val(date[0]);
    $('#month').val(date[1]);
    $('#day').val(date[2]);
  };

  requestView.initNewUser = (user) => {
    $('.tab-content').hide();
    $('.request').fadeIn(750);
  }

  requestView.initAboutPage = () => {
    $('.tab-content').hide();
    $('.aboutUs').fadeIn(750);
  }

  module.requestView = requestView;
})(app)

