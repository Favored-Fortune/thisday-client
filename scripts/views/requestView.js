'use strict';

var app = app || {};

(module => {
  const requestView = {}

  requestView.initKnownUser = (user) => {
    $('.tab-content').hide();
    $('.request').fadeIn(750);
    let date = user[0].datesearched.split('T')[0].split('-');
    $('#year').val(date[0]);
    $('#month').val(date[1]);
    $('#day').val(date[2]);
  };

  module.requestView = requestView;
})(app)

