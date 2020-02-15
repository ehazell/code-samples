jQuery(document).ready(function($) {
  $("#northwest").click(function(){
    $("#block-views-planning-area-meetings-block-1").slideToggle("slow");
  });
  $("#west-basin").click(function(){
    $("#block-views-planning-area-meetings-block-2").slideToggle("slow");
  });
  $("#cochise-area").click(function(){
    $("#block-views-planning-area-meetings-block").slideToggle("slow");
  });
  $("#tucson").click(function(){
    $("#block-nodeblock-927").slideToggle("slow");
  });
  $("#pinal").click(function(){
    $("#block-nodeblock-926").slideToggle("slow");
  });
  $("#srv").click(function(){
    $("#block-nodeblock-925").slideToggle("slow");
  });
  $("#santa-cruz").click(function(){
    $("#block-nodeblock-928").slideToggle("slow");
  });
  $("#prescott").click(function(){
    $("#block-nodeblock-924").slideToggle("slow");
  });
  $("#san-pedro").click(function(){
    $("#block-nodeblock-929").slideToggle("slow");
  });
  $("#willcox").click(function(){
    $("#block-nodeblock-1791").slideToggle("slow");
  });
  $("#yuma").click(function(){
    $("#block-nodeblock-930").slideToggle("slow");
  });
  $("#node-943").click(function(){
    $("#block-nodeblock-943").slideToggle("slow");
  });
  $("#aaws-img").hover(function(){
    $(".aaws-data").slideToggle("slow");
  });
  $("#gwsi-img").hover(function(){
    $(".gwsi-data").slideToggle("slow");
  });
  $("#wells55-img").hover(function(){
    $(".wells55-data").slideToggle("slow");
  });
  $("#cws-web-img").hover(function(){
    $(".cws-map").slideToggle("slow");
  });
  $("#pma-2018").click(function(){
    $("#block-views-adwr-past-public-meetings-block").slideToggle("slow");
  });
  $("#pma-2017").click(function(){
    $("#block-views-6434799d88116cd77afae9ee12dc367a").slideToggle("slow");
  });
  $("#pma-2016").click(function(){
    $("#block-views-4560ecaa5bc30c23d111c19c5bb9262b").slideToggle("slow");
  });

});

jQuery(document).ready(function($) {
  $('#scottsdale-nephx').click(function(){
    $('#block-nodeblock-1073').slideToggle('slow');
  });
  $('#hawk-rock').click(function(){
    $('#block-nodeblock-1071').slideToggle('slow');
  });
  $('#west-valley').click(function(){
    $('#block-nodeblock-1072').slideToggle('slow');
  });
  $('#buckeye').click(function(){
    $('#block-nodeblock-1078').slideToggle('slow');
  });
  $('#holbrook').click(function(){
    $('#block-nodeblock-1079').slideToggle('slow');
  });
  $('#mcmullen').click(function(){
    $('#block-nodeblock-1080').slideToggle('slow');
  });
  $('#harquahala').click(function(){
    $('#block-nodeblock-1081').slideToggle('slow');
  });
  $('#ranegras').click(function(){
    $('#block-nodeblock-1082').slideToggle('slow');
  });
  $('#gila-bend').click(function(){
    $('#block-nodeblock-1083').slideToggle('slow');
  });
  $('#east-valley').click(function(){
    $('#block-nodeblock-1084').slideToggle('slow');
  });
  $('#picacho-eloy').click(function(){
    $('#block-nodeblock-1085').slideToggle('slow');
  });
  $('#maricopa-stanfield').click(function(){
    $('#block-nodeblock-1086').slideToggle('slow');
  });
  $('#tucson-lsf').click(function(){
    $('#block-nodeblock-1087').slideToggle('slow');
  });
  $('#green-valley').click(function(){
    $('#block-nodeblock-1088').slideToggle('slow');
  });
  $('#fort-grant').click(function(){
    $('#block-nodeblock-1089').slideToggle('slow');
  });
  $('#kansas').click(function(){
    $('#block-nodeblock-1090').slideToggle('slow');
  });
  $('#elfrida').click(function(){
    $('#block-nodeblock-1091').slideToggle('slow');
  });
  $('#bowie-san-simon').click(function(){
    $('#block-nodeblock-1092').slideToggle('slow');
  });
});


jQuery(document).ready(function($) {
  $(document).tooltip({ selector: '[data-toggle="tooltip"]' });
  $(document).popover({ selector: '[data-toggle="popover"]' });
});

jQuery(document).ready(function($){
  $('#node-716.accordion').click(function(){
    $('#block-nodeblock-1073').modal('toggle');
  });
});


jQuery(document).ready(function($) {
  $('#scottsdale-nephx').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1073').html();
    }
  });
  $('#hawk-rock').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1071').html();
    }
  });
  $('#west-valley').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1072').html();
    }
  });
  $('#buckeye').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1078').html();
    }
  });
  $('#holbrook').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1079').html();
    }
  });
  $('#mcmullen').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1080').html();
    }
  });
  $('#harquahala').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1081').html();
    }
  });
  $('#ranegras').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1082').html();
    }
  });
  $('#gila-bend').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1083').html();
    }
  });
  $('#east-valley').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1084').html();
    }
  });
  $('#picacho-eloy').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1085').html();
    }
  });
  $('#maricopa-stanfield').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1086').html();
    }
  });
  $('#tucson-lsf').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1087').html();
    }
  });
  $('#green-valley').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1088').html();
    }
  });
  $('#fort-grant').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1089').html();
    }
  });
  $('#kansas').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1090').html();
    }
  });
  $('#elfrida').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1091').html();
    }
  });
  $('#bowie-san-simon').popover({
    html: true,
    trigger: 'hover',

    content: function() {
      return $('#block-nodeblock-1092').html();
    }
  });
});

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
});



jQuery(document).ready(function($){
  $(".node-crm-interactive-dashboard h2").append("<span>x</span");
  $(".node-crm-interactive-dashboard h2 span").addClass("close");
});

jQuery(document).ready(function($){
  $('.close').click(function(){
    $('body.page-node-1191 .block-nodeblock').fadeOut('slow');
  });
});

jQuery(document).ready(function($) {
  $('#').popover({
    html: true,
    trigger: 'click',
    content: function() {
      return $('#drought_conditions-block-0').html();
    }
  });
});

jQuery(document).ready(function($) {
  $(".more").click(function(){
    $("#read-more").slideToggle("slow");
    $(".disappear").toggle();
  });
});

jQuery(document).ready(function($) {
  // If the Rent option is checked redirect the page
  $('#multi-step-form input').on('change', function(e) {
    if( $('.denied').is(':checked') ) {
      // alert("You are not eligible");
      $('.denial-content').show()
      $('.cap-box-bottom').hide()
    }
  });
  var current_fs, next_fs, previous_fs; //fieldsets
  var success_msg, ms_form; //for success
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches
  $('.next').click(function(){
    if (!$("input[name='optionsRadios']:checked").val()) {
      $('.error').show();
      return false;
    }
    else {
      $('.error').hide();
    }
    // if(animating) return false;

    current_fs = $(this).closest("fieldset");
    next_fs = $(this).closest("fieldset").next();

    if (current_fs.find('input:radio:checked').length == 0) {
      // Add error message handling here
      $('.error').show();
      return false;
    }else {
      $('.error').hide();

    }

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50)+"%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({'transform': 'scale('+scale+')'});
        next_fs.css({'left': left, 'opacity': opacity});
      },
      duration: 800,
      complete: function(){
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  });


  $(".submit").click(function(){
    if(animating) return false;
    animating = true;

    success_msg = $(".thank-you");
    ms_form = $(".multi-step-form");

    success_msg.show();
    ms_form.animate({opacity:0}, {
      step: function(now, mx) {
        scale = 1 -(1 - now) * 0.2;
        left= (now * 50)+"%";
        opacity = 1 - now;
        ms_form.css({'transform':'scale('+scale+')'});
        success_msg.css({'left':left, 'opacity':opacity});
      },
      duration: 800,
      complete: function(){
        ms_form.hide();
        animating = false;
      },
      easing: 'easeInOutBack'
    });

    return false;
  });

  $('#type-a-certificate').popover({
    html: true,
    trigger: 'hover',
    placement: 'right',
    content: function(){return '<img class="img-responsive" src="'+$(this).data('img') + '" />';}
  });


  $('#element').click(function(){

    $(location).attr('href', 'mailto:assuredadequate@azwater.gov?subject=Eligibility to use a previously issued certificate'

      + "&body="
      + encodeURIComponent("The platting authority of  ")
      + $('#plat').val()
      + encodeURIComponent(" certifies that, ")
      + $('#applicant').val()
      + encodeURIComponent(" is eligible to use certificate # ")
      + $('#certificate').val()

    );
  });
});

/** Responsive Timeline **/

jQuery(document).ready(function ($) {

  $('.dot').click(function(){
    var modal = $(this).attr('id');
    $('.modal').unwrap('<div class="mask"></div>');
    $('.modal').hide();
    $('.modal').addClass('nobox');
    $('article.nobox').hide()
    $('article.nobox.' + modal).fadeIn(200)
    $('article.modal h2').append("<span>x</span");
    $ ('article.modal h2 span').addClass("close");
  });
  $('article.modal').click(function(){
    $('article.modal').fadeOut(300);
  });
});
