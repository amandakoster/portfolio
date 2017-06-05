'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    //       Remember that the callback function we'll want to call relies on repos.all
    //       being an array with a bunch of repo objects in it, so you'll need to
    //       populate it with the response from Github before you call the callback.
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization:`token ${myGhToken}`
      }
    })
   .then(data => {
     data.forEach (repoData => repos.all.push(repoData))
   })
    callback();
  }

  repos.with = attr => repos.all.filter(repo => repo[attr]);
  module.repos = repos;
})(app)
