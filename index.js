//index.js

$(document).ready(function (){

  $('.overlay').hide();

  $('.petsy img').mouseover(function () {
      $('.overlay').show();
  }).mouseout(function () {
      $('.overlay').hide();
  });

});
