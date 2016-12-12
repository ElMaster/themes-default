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

    // $(".CONTEXT-st").slick({
    //     speed: 0,
    //     fade: true
    // })
    $("#context_hints").context_hints({auto:7000});
});