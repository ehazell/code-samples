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
$(".next").click(function(){
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

$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'right',
  content: function(){return '<img class="img-responsive" src="'+$(this).data('img') + '" />';}
});