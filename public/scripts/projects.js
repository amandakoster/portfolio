// 1. break out the js files to CMV files.
// 2. refractor code to make it more eefficient and lean


'use strict';
var projects = [];

//Models
function Project(rawDataObject) {
  for (var key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}

//refractored - broken
// Project.prototype.toHtml = () => {
//   let template = $('#project-template').html();
//   let templateRender = Handlebars.compile(template);
//   return templateRender(this);
// };

// OLD WAY
Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

Project.all = rawData.map(funciton(ele) {
  return new Project(ele)
};


})
//Controller
projects.forEach = (NewProjectObject) => $('#projects').append(NewProjectObject.toHtml);

// OLD WAY
//projects.forEach(function(NewProjectObject) {
//   $('#projects').append(NewProjectObject.toHtml());
// });

Project.all = [];
//Models
//Refractor - broken. Can I have 2 arrow functions?
// Project.loadAll = (rawData) => rawData.forEach(ele) => Project.all.push(ele);

//OLD WAY
Project.loadAll = function(rawData){
  // rawData.forEach(function(ele) {
  //   Project.all.push(new Project(ele))
  // })
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
};


//Models
// OLD WAY
// Project.fetchAll = function() {
//   if (localStorage.rawData) {
//     let rawData = (JSON.parse(localStorage.rawData))
//     Project.loadAll(rawData)
//     Project.all.forEach(function(newProject) {
//       $('#projects').append(newProject.toHtml());
//     })
//   } else {
//     $.getJSON('/data/jsonDataset.json').then(function(data) {
//       localStorage.rawData = (JSON.stringify(data))
//       data.forEach(function(projectObject) {
//         Project.all.push(new Project(projectObject))
//       })
//       Project.all.forEach(function(newProject) {
//         $('#projects').append(newProject.toHtml());
//       })
//     })
//   }
// }
