'use strict';

var app = app || {};

(function(modules){
  const homeController = {};
  homeController.index = function(){
    app.Project.fetchAll(app.projectView.initIndexPage);
    $('.tab-content').hide();
    $('#projects').fadeIn(750);
    app.projectView();
  }
  modules.homeController = homeController;
})(app);
