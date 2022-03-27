$(document).ready(function() {

  $('.SSS').click(function() {
    $('.Answer1').show();
    $('.SSS').hide();
  });
  $('.Answer1').click(function() {
    $('.SSS').show();
    $('.Answer1').hide();
  });

  $('.ASA').click(function() {
			$(".Answer2").fadeToggle(3000);
			$('.ASA').hide();


  });
  $('.Answer2').click(function() {
    $('.ASA').fadeToggle(3000);
    $('.Answer2').hide();
  });

  $('.SAS').click(function() {
  $(".Answer3").slideToggle("slow");
  });

});
