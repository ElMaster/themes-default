//multiple text input
(function($) {
    var defaults = {
        auto:3000
    };
    $.fn.context_hints = function(params) {
        var options = $.extend({}, defaults, params);
        $(this).each(function() {
            var $this = $(this),
                $navA = $this.find("div.nav a"),
                $backward = $this.find("div.nav a.backward"),
                $forward = $this.find("div.nav a.forward"),
                $li = $this.find("li"),
                $active = $this.find("li.active"),
                $next = $active.next("li"),
                $prev = $active.prev("li");

            $forward.click(function(e) {
                $active.removeClass("active")
                if(!$next.is("li")) {
                    $next = $($li[0]);
                }
                $active = $next.addClass("active");
                getNext();
                getPrev();

                if(options.auto) {
                    clearInterval(hintsInterval);
                    hintsInterval = setInterval(function() {interval();}, options.auto);
                }
                e.stopPropagation();
                e.preventDefault();
            });

            $backward.click(function(e) {
                $active.removeClass("active");

                if(!$prev.is("li")) {
                    
                    $prev = $($li[$li.length - 1]);

                }
                $active = $prev.addClass("active");
                getNext();
                getPrev();

                if(options.auto) {
                    clearInterval(hintsInterval);
                    hintsInterval = setInterval(function() {interval();}, options.auto);
                }
                e.stopPropagation();
                e.preventDefault();
            });

            function interval() {
                $forward.click();
            }

            function getNext() {
                $next = $active.next("li");
            }

            function getPrev() {
                $prev = $active.prev("li");
            }

            if(options.auto) {//auto click
                var hintsInterval = setInterval(function() {interval();}, options.auto);
            }
        });
        return this;
    };
})(jQuery);
function collapsElement(id) {
    if ( document.getElementById(id).style.display != "none" ) {
        document.getElementById(id).style.display = 'none';
    }
    else {
        document.getElementById(id).style.display = '';
    }
}

$(document).ready(function() {
    $('#top-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });
    $('#footer-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.slider-hor').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        autoplay: false
        //autoplaySpeed: 3000
    });
    $('.slider-content-hor').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    if($(".fancy").length) {
        $(".fancy").fancybox({
            helpers : {
                title : {
                    type : 'inside'
                }
            }
        });
    }

   
    $("#context_hints").context_hints({auto:7000});

    jQuery.datetimepicker.setLocale('ru');


    $('#myModal').on('shown.bs.modal', function () {
        if ($(window).width() <= '767') {
            jQuery(function () {
                jQuery('#_datetimepicker3').datetimepicker({
                    defaultDate: new Date(),
                    format: 'd.m.Y H:i',
                    inline: true,
                    lang: 'ru',
                    timepicker: false,
                    allowTimes: [
                        '08:00', '09:00', '10:00',
                        '11:00', '12:05', '13:20', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
                    ]
                });
            });
            return this;
        }
        else {
            jQuery(function () {
                jQuery('#_datetimepicker3').datetimepicker({
                    defaultDate: new Date(),
                    format: 'd.m.Y H:i',
                    inline: true,
                    lang: 'ru',

                    allowTimes: [
                        '08:00', '09:00', '10:00',
                        '11:00', '12:05', '13:20', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
                    ]
                });
            });
        }
    })
    $('.open-popover-modal').on('click', function () {
        $($(this).data('target')).show();
        
    })
    $('.popover-modal').find('.close').on('click', function () {
        $('.popover-modal').hide();
    })
});
