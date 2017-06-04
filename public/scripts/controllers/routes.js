'use strict';
var app = app || {};

page('/about', app.githubController .index);
// Redirect home if the default filter option is selected:
page('/category', '/');

// Done cOMMENT: What is this function doing?
// invokes everything on Page.js and making everything above a listener
page();
