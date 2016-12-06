//index.js

$(document).ready(function (){

//Assignments page
  $('#calc').hide();
  $('#solar-system').hide();
  $('#bank').hide();
  $('#farmer').hide();
  $('#scrabble').hide();
  $('#task').hide();
  $('#etsy').hide();
  $('#JS').show();
  $('#tasklist').hide();

  $("#solar-system-link").click(function(){
    $('#calc').hide();
    $('#solar-system').show();
    $('#bank').hide();
    $('#farmer').hide();
    $('#scrabble').hide();
    $('#task').hide();
    $('#etsy').hide();
    $('#JS').hide();
    $('#tasklist').hide();
  });

  $("#calc-link").click(function(){
    $('#calc').show();
    $('#solar-system').hide();
    $('#bank').hide();
    $('#farmer').hide();
    $('#scrabble').hide();
    $('#task').hide();
    $('#etsy').hide();
    $('#JS').hide();
    $('#tasklist').hide();
  });

  $("#bank-link").click(function(){
    $('#calc').hide();
    $('#solar-system').hide();
    $('#bank').show();
    $('#farmer').hide();
    $('#scrabble').hide();
    $('#task').hide();
    $('#etsy').hide();
    $('#JS').hide();
    $('#tasklist').hide();
  });

  $("#farmer-link").click(function(){
    $('#calc').hide();
    $('#solar-system').hide();
    $('#bank').hide();
    $('#farmer').show();
    $('#scrabble').hide();
    $('#task').hide();
    $('#etsy').hide();
    $('#JS').hide();
    $('#tasklist').hide();
  });

  $("#etsy-link").click(function(){
    $('#calc').hide();
    $('#solar-system').hide();
    $('#bank').hide();
    $('#farmer').hide();
    $('#scrabble').hide();
    $('#task').hide();
    $('#etsy').show();
    $('#JS').hide();
    $('#tasklist').hide();
  });

  $("#JS-link").click(function(){
    $('#calc').hide();
    $('#solar-system').hide();
    $('#bank').hide();
    $('#farmer').hide();
    $('#scrabble').hide();
    $('#task').hide();
    $('#etsy').hide();
    $('#JS').show();
    $('#tasklist').hide();
  });

  $("#task-link").click(function(){
    $('#calc').hide();
    $('#solar-system').hide();
    $('#bank').hide();
    $('#farmer').hide();
    $('#scrabble').hide();
    $('#task').hide();
    $('#etsy').hide();
    $('#JS').hide();
    $('#tasklist').show();
  });

  $("#scrabble-link").click(function(){
    $('#calc').hide();
    $('#solar-system').hide();
    $('#bank').hide();
    $('#farmer').hide();
    $('#scrabble').show();
    $('#task').hide();
    $('#etsy').hide();
    $('#JS').hide();
    $('#tasklist').hide();
  });
//Portfolio page
  $('.overlay').hide();

  $('.petsy img').mouseover(function () {
      $('.petsy .overlay').show();
  }).mouseout(function () {
      $('.petsy .overlay').hide();
  });

  $('.farmar-rails img').mouseover(function () {
      $('.farmar-rails .overlay').show();
  }).mouseout(function () {
      $('.farmar-rails .overlay').hide();
  });

});
