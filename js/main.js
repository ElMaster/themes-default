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
    
    $(".fancy").fancybox();
});