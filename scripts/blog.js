"use strict";

var rawData = [
  {
    title:       'Blog Title',
    category:    'UX',
    author:      'Amanda Koster',
    authorUrl:   'http://www.amandakoster.com',
    publishedOn: 'some date',
    body:        '<p></p>'
  },


  //nav handler
  $('nav a').on('click', function() {
    var $whereToGo = $(this).data('tab') //gives us 'delegation' or 'attributes'
    $('.tab-content').hide()
    //we want $('#delegation')
    $('#' + $whereToGo).fadeIn(750)
  })

    var $target = $(this).text();
    var $newFeedback = $('#feedback p:first-child').clone();

    $newFeedback.text('You clicked on ' + $target);
    $('#feedback').append($newFeedback);
  }

  //not delegated - event bound to all the 'li's
  //no selector specified in .on() method
  $('#menu1 li').on('click', logTarget)

  //delegated - event is bound to parent
  //'li' is specified in .on()
  $('#menu2').on('click', 'li', logTarget)

  //DOM-ready function
  $(document).ready(function() {
    $('.tab-content').hide()
