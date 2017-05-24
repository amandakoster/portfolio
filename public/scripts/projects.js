
'use strict';
var projects = [];

function Project(rawDataObject) {
  for (var key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}
Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

projects.forEach(function(NewProjectObject) {
  $('#projects').append(NewProjectObject.toHtml());
});

Project.all = [];
Project.loadAll = function(rawData){
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele))
  })
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    let rawData = (JSON.parse(localStorage.rawData))
    Project.loadAll(rawData)
    Project.all.forEach(function(newProject) {
      $('#projects').append(newProject.toHtml());
    })
  } else {
    $.getJSON('/data/jsonDataset.json').then(function(data) {
      localStorage.rawData = (JSON.stringify(data))
      data.forEach(function(projectObject) {
        Project.all.push(new Project(projectObject))
      })
      Project.all.forEach(function(newProject) {
        $('#projects').append(newProject.toHtml());
      })
    })
  }
}
