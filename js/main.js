$(window).load(function() {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function(){

    wow = new WOW({
        mobile:       false,       // default
      }
    )
    wow.init();

     $('#top-nav').onePageNav({
        currentClass: 'current',
        changeHash: true,
        scrollSpeed: 1200
    });

     
    //animated header class
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".navbar-default").addClass("animated");
        } else {
            $(".navbar-default").removeClass('animated');
        }
    });
	
	/*
	var startTime = moment('2017-09-01 10:00');
	$('.timer').countdown(startTime.toDate(), function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});
*/
/*
    $('#countdown_dashboard').countDown({
        targetDate: {
            'day':      1,
            'month':    9,
            'year':     2017,
            'hour':     09,
            'min':      00,
            'sec':      01,
        },
        omitWeeks: true
    });

*/
    $('.init-slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        video:true,
        smartSpeed: 600
    });
    /*$('input, textarea').data('holder', $('input, textarea').attr('placeholder'));

    $('input, textarea').focusin(function () {
        $(this).attr('placeholder', '');
    });
    $('input, textarea').focusout(function () {
        $(this).attr('placeholder', $(this).data('holder'));
    });*/


    //contact form validation
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста, введите имя",
                minlength: "Имя должно быть хотя бы из двух букв"
            },
            message: {
                required: "Пожалуйста, напишите сообщение",
                minlength: "Ваше сообщение должно состоять хотя бы из двух символов"
            },
            email: "Пожалуйста, введите Ваш e-mail"
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:"POST",
                data: $(form).serialize(),
                url:"mail.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });

});