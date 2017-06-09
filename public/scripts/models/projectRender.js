'use strict';

let projectArray = [];

function Project(projectData) {
  this.title = projectData.title;
  this.role = projectData.role;
  this.category = projectData.category;
  this.projectUrl = projectData.projectUrl;
  this.overview = projectData.overview;
  this.challenge = projectData.challenge;
  this.approach = projectData.approach;
  this.process = projectData.process;
  this.responsibilities = projectData.responsibilities;
  this.results = projectData.results;
}

Project.prototype.toHtml = function() {
  let template = $('#project-template').html();
  let templateRender = Handlebars.compile(template);
  return templateRender(this);
};

projectData.forEach(function(callback) {
  projectArray.push(new Project(callback));
});

projectArray.forEach(function(callback) {
  $('#project').append(callback.toHtml());
});
