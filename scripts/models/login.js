'use strict';

$('')

// let users = [];

// function User (loginObject) {
//   this.username = loginOjbect.username;
//   this.pin = loginOjbect.pin;
//   this.date = loginOjbect.date;
// }

// User.prototype.toHtml = function() {
//   let $newUser = $('article.template').();
//   $newUser.removeClass('template');
//   if (!this.publishedOn) {
//     $newUser.addClass('draft');
//   }
//   $newUser.attr('data-category', this.category);

//   // DONE: Use jQuery to add the author name as an additional data-attribute of the newly cloned article. Doing so will allow us to use selectors to target articles based on who wrote them.
//   $newUser.attr('data-author', this.author);

//   $newUser.find('.byline a').html(this.author);
//   $newUser.find('.byline a').attr('href', this.authorUrl);
//   $newUser.find('h1:first').html(this.title);
//   $newUser.find('.article-body').html(this.body);
//   $newArticle.find('time[pubdate]').attr('datetime', this.publishedOn);
//   $newUser.find('time[pubdate]').attr('title', this.publishedOn);
//   $newUser.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
//   $newUser.append('<hr>');
//   return $newUser;
// };
// $
// <main id="content"></main>
// <fieldset>
//   <legend>Login/Sign-up</legend>
//   <form name="loginForm" id="loginForm">
//     <label for="userName">User Name:</label>
//     <input id="userName" name="userName" type="text" required="">
//     <button id="login">Enter</button>
//   </form>
// </fieldset>  