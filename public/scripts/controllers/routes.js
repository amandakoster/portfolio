'use strict';
var app = app || {};

page('/', app.homeController.index);
page('/about', app.githubController.index);
page('/projects', app.tbd.Controller3ndView.index);
page();
