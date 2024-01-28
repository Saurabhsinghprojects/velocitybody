$(document).ready(function () {

    //    smooth scroll
    $('a').smoothScroll({speed: 1500});

    //    back to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 1500);
        return false;
    });

});
