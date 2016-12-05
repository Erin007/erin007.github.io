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

  $("#solar-system-link").click(function(){
    $('#calc').hide();
    $('#solar-system').show();
    $('#bank').hide();
    $('#farmer').hide();
    $('#scrabble').hide();
    $('#task').hide();
    $('#etsy').hide();
    $('#JS').hide();
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
  });
//Portfolio page
  $('.overlay').hide();

  $('.petsy img').mouseover(function () {
      $('.petsy .overlay').show();
  }).mouseout(function () {
      $('.petsy .overlay').hide();
  });

  $('.tasklist img').mouseover(function () {
      $('.tasklist .overlay').show();
  }).mouseout(function () {
      $('.tasklist .overlay').hide();
  });

});
