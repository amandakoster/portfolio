'use strict';
var app = app || {};

(function(module) {
  const githubController  = {};

  githubController .index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.githubController  = githubController ;
})(app);



'use strict';

var app = app || {};

(function (module) {
  const githubController = {};

  githubController.all = [];

  githubController.handleGithubNav = function () {
    $('article').hide();
    $('#aboutMe').hide();
    $('article').map(function () {
      if ($(this).data('category') === 'Github') {
        $(this).fadeIn();
      }
    });
  };

  module.githubController = githubController;
