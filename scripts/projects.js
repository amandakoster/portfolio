'use strict';

var projects = [];

function Project (rawDataObject) {
  for (key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
};

Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

dataset.forEach(function(projectObject) {
  neighborhoods.push(new Project(projectObject));
