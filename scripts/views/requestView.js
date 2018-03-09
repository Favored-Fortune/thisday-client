'use strict';

var app = app || {};

(module => {
  const requestView = {}

  requestView.initLoginPage = () => {
    let reload = () =>`app.${sessionStorage.currentPage}([{username: "${sessionStorage.username}", pin: "0000", fav_date: "${sessionStorage.year}-${sessionStorage.month}-${sessionStorage.day}T00:00:00.000Z}"]);`
    if(sessionStorage) {
      reload();
    }
    let currentDate = new Date;
    $('.icon-menu').on('click', module.requestView.dropNav);
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
    console.log(user);
    let date = user[0].fav_date.split('T')[0].split('-');
    $('#year').val(date[0]);
    $('#month').val(date[1]);
    $('#day').val(date[2]);
    sessionStorage.currentPage = 'requestView.initKnownUser';
  };

  requestView.initNewUser = (user) => {
    $('.tab-content').hide();
    $('.request').fadeIn(750);
    $('#year').val('');
    $('#month').val('');
    $('#day').val('');
    sessionStorage.currentPage = 'requestView.initNewUser';
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

  requestView.dropNav = () => {
    var drop = document.getElementById('topNav');
    if (drop.className === 'topNav') {
      drop.className += ' responsive';
    } else {
      drop.className = 'topNav';
    }
  }

  module.requestView = requestView;
})(app)

