'use strict';
var projects = [];

//Models
function Project(rawDataObject) {
  for (var key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}
