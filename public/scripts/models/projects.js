'use strict';

//Models
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

Project.all = [];

Project.loadAll = function(rawData){
  Project.all = rawData.map(function(ele) {
    return new Project(ele)
  })
}

//Models
Project.fetchAll = () => {
  if (localStorage.rawData) {
    let rawData = (JSON.parse(localStorage.rawData))
    Project.loadAll(rawData)
    Project.all.forEach(function(newProject) {
      $('#projects').append(newProject.toHtml()); //view
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
};

//controllers = page.js / routes / pageController
