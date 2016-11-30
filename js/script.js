/**
 * Created by Denis on 10/16/2016.
 */
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $('a[href^="#"]').click(function(){
//????????? ???????? ???????? href ? ??????????:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 600);
        return false;
    });

});
