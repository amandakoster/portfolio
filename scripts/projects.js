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

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
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
