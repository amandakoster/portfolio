// Use good Object Oriented code: Create a constructor function for projects that contains properties appropriate for a portfolio project.

'use strict';

var projects = [];

function Project (rawDataObject) {
  this.title = rawDataObject.title;
  this.category = rawDataObject.category;
  this.author = rawDataObject.author;
  this.authorUrl = rawDataObject.authorUrl;
  this.publishedOn = rawDataObject.publishedOn;
  this.body = rawDataObject.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  console.log();
  $newProject.removeClass('template');

  if (!this.publishedOn) $newProject.addClass('draft');
  $newProject.data('category', this.category);
  $newProject.find('h1').html(this.title);
  $newProject.find('address a').attr('href',this.authorUrl);
  $newProject.find('a').html(this.author);
  $newProject.find('.article-body').html(this.body);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject;
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(articleObject) {
  articles.push(new Project(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
