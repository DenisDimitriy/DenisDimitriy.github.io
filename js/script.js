/**
 * Created by Denis on 10/16/2016.
 */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

});
