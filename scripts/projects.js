'use strict';
var projects = [];

function Project(rawDataObject) {
  for (var key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};
Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};
projectObject.forEach(function(project) {
  projects.push(new Project(project));
});
projects.forEach(function(NewProjectObject) {
  $('#projects').append(NewProjectObject.toHtml());
});
