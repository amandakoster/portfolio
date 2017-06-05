// 'use strict';
// var app = app || {};
//
// (function(module) {
//   const githubController  = {};
//
//   githubController.index = () => {
//     $('#github').show().siblings().hide();
//     app.repos.requestRepos(app.githubView.index);
//   };
//
//   module.githubController = githubController ;
// })(app);


'use strict';

var app = app || {};

(function(modules){
  const gitHubController = {};
  gitHubController.index = function(){
    app.repos.fetchRepos(app.repoView.initIndexPage);
    $('.tab-content').hide();
    $('#github').fadeIn(750);
  }
  modules.gitHubController = gitHubController;
})(app);
