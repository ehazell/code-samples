// Colorado River Dashboard

jQuery(document).ready(function($) {
  $('#flaming-gorge').click(function(){
    $('#block-nodeblock-1053--2').fadeToggle('slow');
  });
  $('#fontenelle').click(function(){
    $('#block-nodeblock-1058--2').fadeToggle('slow');
  });
  $('#snow-fall').click(function(){
    $('#block-nodeblock-1396--2').fadeToggle('slow');
  });
  $('#lake-powell').click(function(){
    $('#block-nodeblock-1052--2').fadeToggle('slow');
  });
  $('#morrow-point').click(function(){
    $('#block-nodeblock-1054--2').fadeToggle('slow');
  });
  $('#blue-mesa').click(function(){
    $('#block-nodeblock-1055--2').fadeToggle('slow');
  });
  $('#navajo').click(function(){
    $('#block-nodeblock-1056--2').fadeToggle('slow');
  });
  $('#lake-mead').click(function(){
    $('#block-nodeblock-1051--2').fadeToggle('slow');
  });
  $('#drought-monitor').click(function(){
    $('#block-nodeblock-1633--2').fadeToggle('slow');
  });
  $(".node-crm-interactive-dashboard h2").append("<span>x</span");
  $(".node-crm-interactive-dashboard h2 span").addClass("close");
});
