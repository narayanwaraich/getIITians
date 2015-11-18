$(function () {
	$('[data-toggle="popover"]').popover({
		trigger: 'focus',
		animation: true,
		html: true
	})

	if ($('.signuppersonal').length) {
		$('.signuppersonal .dob input').datepicker({
			format: "dd/mm/yyyy",
			clearBtn: true,
			orientation: "bottom auto"
		});
	};

	if ($('.signupcalendar').length) {
		$('.signupcalendar .dates input').datepicker({
			format: "dd/mm/yyyy",
			clearBtn: true,
			orientation: "bottom auto",
			startDate: '0'
		});
	};

	var classList = {
		500 : "five",
		800 : "eight",
		1000 : "ten",
		1200 : "twelve",
		1500 : "fifteen",
		2000 : "twenty"
	}
	$('input[name=subject]').change(function() {
		if ($('input[name=price]:checked').length) {
			var price = $('input[name=price]:checked', '#signupsubjects').val();
			var id = $(this).attr("id");
			var label = $('label[for="'+id+'"]');
			if (label.attr('class') == classList[price]) {
				label.removeClass();
			} else{
				label.removeClass().addClass(classList[price]);
			};
		} else {
			$('#signupsubjects').find('alert').show('normal');
		}
	});

	$(document).on('click','#signupsubjects .subject label', function(event) {
		if (!($('input[name=price]:checked').length)) {
			$('#signupsubjects').find('div.alert-red').show('normal', function(){
				var thisAlert = $(this);
				function hideAlert(){
					thisAlert.hide('slow');
				}
				window.setTimeout(hideAlert, 3000);
			});
		}
	})

	var insertData = "<div id='hidden' style='display:none;'><div class='row added'><div class='col-xs-5'><hr class='purple'></div><div class='clearfix'></div><div class='col-xs-2'><h5>Graduate College</h5></div><div class='col-xs-offset-1 col-xs-2'><fieldset class='form-group'><input type='text' class='form-control'></fieldset></div><div class='clearfix'></div><div class='col-xs-2'><h5>Degree</h5></div><div class='col-xs-offset-1 col-xs-2'><fieldset class='form-group'><input type='text' class='form-control'></fieldset></div><div class='clearfix'></div><div class='col-xs-2'><h5>Branch</h5></div><div class='col-xs-offset-1 col-xs-2'><fieldset class='form-group'><input type='text' class='form-control'></fieldset></div><div class='clearfix'></div><div class='col-xs-2'><h5>College Verification</h5></div><div class='col-xs-3'><fieldset class='form-group'><input type='file' id='file' class='form-control'></fieldset></div></div></div>";
	$(document).on('click','.addanothercollege a.add', function(event) {
		$(insertData).insertBefore('.addanothercollege');
		$('#hidden').slideDown(600, 'swing', function() {
			$(this).find('.row').unwrap();
		})
		$('.addanothercollege a.remove').show();
	});
	$(document).on('click','.addanothercollege a.remove', function(event) {
		var target = $('.addanothercollege').prev('div.added');
		target.slideUp('slow', function(){
			target.remove();
			if (!($('div.added').length)) {
				$('.addanothercollege a.remove').hide();
			};
		});
	})
})