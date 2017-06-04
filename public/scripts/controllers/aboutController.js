'use strict';
var app = app || {};

(function(module) {
  const repoController = {};

  repoController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
