'use strict';

var app = app || {};

(module => {
  const requestView = {}

  requestView.initLoginPage = () => {
    let currentDate = new Date;
    $('.tab-content').hide();
    $('#currentDate').empty();
    $('#currentDate').hide();
    $('main > p').hide();
    $('#currentDate').append('The current date is: ' + currentDate.toDateString());
    $('#currentDate').fadeIn(500);
    $('main > p').fadeIn(750);
    $('.login').fadeIn(1000);
    $('#aboutUs').on('click', app.requestView.initAboutPage);
    $('#username').val('');
  }

  requestView.initKnownUser = (user) => {
    $('.tab-content').hide();
    $('main > p').hide();
    $('.request').fadeIn(750);
    let date = user[0].fav_date.split('T')[0].split('-');
    $('#year').val(date[0]);
    $('#month').val(date[1]);
    $('#day').val(date[2]);
  };

  requestView.initNewUser = (user) => {
    $('.tab-content').hide();
    $('.request').fadeIn(750);
    $('#year').val('');
    $('#month').val('');
    $('#day').val('');
  }

  requestView.initAboutPage = () => {
    $('.tab-content').hide();
    $('#currentDate').hide();
    $('#chosenDate').hide();
    $('main > p').hide();
    $('.aboutUs').fadeIn(750);
  }

  requestView.showDate = () => {
    let currentDate = new Date;
    $('.tab-content').hide();
    $('#currentDate').append(currentDate.toDateString());
  }

  module.requestView = requestView;
})(app)

