'use strict';
var app = app || {};

(function(module) {
  const githubView = {};
  const ui = function() {
    let $github = $('#github'); // Best practice: Cache the DOM query if it's used more than once.
    $github.find('ul').empty();
    $github.show().siblings().hide();
  };

  let template = $('#github-template').html();
  let render = Handlebars.compile(template);
  githubView.index = function() {
    ui();
    $('#github ul').append(
      app.repos.with('name').map(render)
    );
  };
  module.githubView = githubView;
})(app);
