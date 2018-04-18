jQuery(document).ready(function () {
    document.body.onload = function () {
        setTimeout(function () {
            if (!$('.preloader').hasClass('done')) {
                $('.preloader').addClass('done')
            }
        }, 1000)
    };


    var $listMenu = $('.header__content--menu ul li');
    var $menuItem = $('.header__content--menu ul li a');
    $('.burger__click').click(function () {
        $('.burger').toggleClass('active');
        $('.header__content').toggleClass('menu_open');
        $('section').each(function (i, el) {
            $(el).toggleClass('menu_open');
        });
        $('.footer').toggleClass('menu_open');
        if ($('.burger').hasClass('active')) {
            $listMenu.show();
            setTimeout(function () {
                $listMenu.css('opacity', '1');
                $listMenu.css('transform', 'translateY(0px)');
            }, 200);
        } else {
            $listMenu.css('opacity', '0');
            $listMenu.css('transform', 'translateY(-40px)');
            setTimeout(function () {
                $listMenu.hide();
            }, 500);
        }
        return false;
    });
    $menuItem.each(function (i, el) {
        $(el).click(function () {
            setTimeout(function () {
                $('.burger').removeClass('active');
                $('.header__content').removeClass('menu_open');
                $('section').each(function (i, el) {
                    $(el).removeClass('menu_open');
                });
                $('.footer').removeClass('menu_open');
            }, 1200);
        })
    });

    $(function () {
        $('a[href*="#a-"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top-50
                    }, 1200);
                    return false;
                }
            }
        });
    });
    $(function () {
        var $scroll_to_features = $('.features').offset().top-50;
        $('.header__slider--content .arrows__down').click(function () {
            $('html, body').animate({
                scrollTop: $scroll_to_features
            }, 1200);

        });
    });
});
